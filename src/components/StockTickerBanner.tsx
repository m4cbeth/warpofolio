"use client";

import { useState, useEffect } from "react";

type StockData = {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
};

// Dummy data matching API response shape
const dummyData: StockData[] = [
    {
        symbol: "NVDA",
        name: "Nvidia",
        price: 150.25,
        change: 2.5,
        changePercent: 1.69,
    },
    {
        symbol: "DIA",
        name: "Dow Jones",
        price: 350.50,
        change: -1.25,
        changePercent: -0.36,
    },
    {
        symbol: "SPY",
        name: "S&P 500",
        price: 450.75,
        change: 3.20,
        changePercent: 0.72,
    },
    {
        symbol: "QQQ",
        name: "Nasdaq",
        price: 380.90,
        change: -0.50,
        changePercent: -0.13,
    },
    {
        symbol: "EWJ",
        name: "Nikkei 225",
        price: 65.30,
        change: 0.80,
        changePercent: 1.24,
    },
];

export function StockTickerBanner() {
    const [stockData, setStockData] = useState<StockData[]>(dummyData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStockData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch("/api/stock-ticker");

            if (!response.ok) {
                throw new Error("Failed to fetch stock data");
            }

            const result = await response.json();

            if (result.data && Array.isArray(result.data)) {
                setStockData(result.data);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error fetching stock data");
            console.error("Error fetching stock data:", err);
            // Keep existing data on error
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Fetch on mount
        fetchStockData();

        // Set up interval to fetch every 60 seconds
        const interval = setInterval(() => {
            fetchStockData();
        }, 60000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    const formatPrice = (price: number): string => {
        return `$${price.toFixed(2)}`;
    };

    const formatChange = (change: number, changePercent: number): string => {
        const sign = change >= 0 ? "+" : "";
        return `${sign}${change.toFixed(2)} (${sign}${changePercent.toFixed(2)}%)`;
    };

    const renderTickerSet = (setKey: string) => {
        return (
            <div
                key={setKey}
                className="flex items-center justify-between gap-8 w-full flex-shrink-0"
            >
                {stockData.map((stock) => {
                    const isPositive = stock.change >= 0;
                    const changeColor = isPositive
                        ? "text-green-400 dark:text-green-500"
                        : "text-red-400 dark:text-red-500";

                    return (
                        <div
                            key={`${setKey}-${stock.symbol}`}
                            className="flex-1 flex flex-col items-center min-w-0"
                        >
                            <div className="flex items-center gap-2 w-full justify-center">
                                <span className="font-semibold text-sm md:text-base font-mono">
                                    {stock.symbol}
                                </span>
                                <span className="font-mono text-sm md:text-base">
                                    {formatPrice(stock.price)}
                                </span>
                            </div>
                            <span className={`font-mono text-xs md:text-sm ${changeColor}`}>
                                {formatChange(stock.change, stock.changePercent)}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="w-full bg-slate-900 text-white border-b border-slate-800 dark:bg-slate-950 dark:border-slate-900 overflow-hidden relative">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 transform-gpu">
                <div className="relative w-full">
                    {/* First set - takes 100% width, starts at translateX(0) */}
                    <div className="ticker-set-first">
                        {renderTickerSet("first")}
                    </div>
                    {/* Second set - absolutely positioned, starts at translateX(100%) */}
                    <div className="ticker-set-second">
                        {renderTickerSet("second")}
                    </div>
                </div>
                {error && !isLoading && (
                    <div className="text-xs text-red-400 text-center mt-1">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

