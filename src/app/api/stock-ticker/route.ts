// app/api/stock-ticker/route.ts

import { NextResponse } from 'next/server';

// In-memory cache
let cache: {
  data: StockData[] | null;
  timestamp: number;
} = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 60 * 1000; // 60 seconds
const SYMBOLS = ['NVDA', 'DIA','SPY', 'QQQ', 'EWJ']; // Nvidia, Dow, S&P 500, Nasdaq, Nikkei 225

type StockData = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

export async function GET() {
  const now = Date.now();
  const cacheAge = now - cache.timestamp;

  // Return cached data if fresh
  if (cache.data && cacheAge < CACHE_DURATION) {
    return NextResponse.json({
      data: cache.data,
      timestamp: cache.timestamp,
      cached: true,
      cacheAge: Math.floor(cacheAge / 1000),
    });
  }

  // Fetch fresh data
  try {
    const apiKey = process.env.FINNHUB_API_KEY;
    
    if (!apiKey) {
      throw new Error('FINNHUB_API_KEY not configured');
    }

    // Fetch all symbols in parallel
    const promises = SYMBOLS.map(async (symbol) => {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${symbol}`);
      }
      
      const data = await response.json();
      
      return {
        symbol,
        name: getSymbolName(symbol),
        price: data.c || 0, // current price
        change: data.d || 0, // change
        changePercent: data.dp || 0, // change percent
      };
    });

    const results = await Promise.all(promises);

    // Update cache
    cache = {
      data: results,
      timestamp: now,
    };

    return NextResponse.json({
      data: results,
      timestamp: now,
      cached: false,
      cacheAge: 0,
    });

  } catch (error) {
    console.error('Error fetching stock data:', error);
    
    // Return stale cache if available, otherwise error
    if (cache.data) {
      return NextResponse.json({
        data: cache.data,
        timestamp: cache.timestamp,
        cached: true,
        stale: true,
        error: 'Failed to fetch fresh data, returning cached',
      });
    }

    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
}

function getSymbolName(symbol: string): string {
  const names: Record<string, string> = {
    'NVDA': 'Nvidia',
    'DIA': 'Dow Jones',
    'SPY': 'S&P 500',
    'QQQ': 'Nasdaq',
    'EWJ': 'Nikkei 225',
  };
  return names[symbol] || symbol;
}