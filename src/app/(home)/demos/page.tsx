import { Metadata } from "next";
import { MdAttachMoney, MdPieChart, MdSavings, MdTrendingUp } from "react-icons/md";

export const metadata: Metadata = {
  title: "Demos",
  description: "Demos",
}

type DemoCard = {
    title: string;
    description: string;
    href: string;
    img: string;
    icon: React.ReactNode;
}
const demoCards: DemoCard[] = [
    {
        title: "Retirement Projection Calculator",
        description: "A calculator that projects your retirement income based on your current savings and investment returns.",
        href: "/demos/retirement-projection",
        img: "/demos/retirement-projection.png",
        icon: <MdTrendingUp />,
    },
    {
        title: "Investment Fee Analyzer",
        description: "Analyze the impact of investment fees on your portfolio growth over time.",
        href: "/demos/investment-fee-analyzer",
        img: "/demos/investment-fee-analyzer.png",
        icon: <MdAttachMoney />,
    },
    {
        title: "Asset Allocation Optimizer",
        description: "Find an optimal asset allocation based on your risk tolerance and investment goals.",
        href: "/demos/asset-allocation-optimizer",
        img: "/demos/asset-allocation-optimizer.png",
        icon: <MdPieChart />,
    },
    {
        title: "Goal-Based Savings Planner",
        description: "Plan and track your savings progress for major financial goals like buying a home or funding education.",
        href: "/demos/goal-savings-planner",
        img: "/demos/goal-savings-planner.png",
        icon: <MdSavings />,
    },
]

export default function DemosPage() {
  return (
    <main>
      <h1>Demos</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {demoCards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
            style={{ textDecoration: "none" }}
          >
            <div className="relative h-40 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 text-3xl text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 rounded-full p-2 shadow">
                {card.icon}
              </div>
            </div>
            <div className="flex-1 flex flex-col p-5">
              <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {card.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm flex-1">
                {card.description}
              </p>
              <span className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                Try it &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>

    </main>
  )
}