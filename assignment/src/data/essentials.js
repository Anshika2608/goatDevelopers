import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Percent,
  Landmark,
  LineChart,
  Banknote,
  Wallet,
  Activity,
  Droplets,
  BarChart,
  AlertTriangle,
  Globe,
  Coins,
  ChartLine
} from "lucide-react";

/* 🔹 Step Generator */
const createSteps = (title, definition) => [
  {
    type: "basic",
    content: definition,
  },
  {
    type: "insight",
    left: `${title} affects how your money behaves over time and impacts financial decisions.`,
    right: `If you ignore ${title.toLowerCase()}, you may lose purchasing power or miss opportunities.`,
  },
  {
    type: "intermediate",
    content: `${title} is not just a statistic — it is the ongoing loss of purchasing power when prices rise faster than income or safe returns. For a Fortress user, the practical question is not whether prices are up, but whether savings, wages, and assets are keeping pace.`,
  },
  {
    type: "strategic",
    content: `${title} changes behavior across the whole system. It pressures consumers, raises borrowing costs, distorts asset prices, and often pushes people into riskier assets just to maintain real value. A Fortress approach treats inflation as a structural force that requires allocation discipline, liquidity planning, and selective ownership of assets that can hold value or produce cash flow.`,
  },
 {
  type: "ai",
  content: {
    heading: "Explanation by Fortress AI",
    sections: [
      {
        title: "1) Purchasing power: the real impact",
        text: `${title} directly reduces purchasing power—what your money can actually buy.`,
        points: [
          "If your income or investments grow slower than inflation, you're effectively getting poorer in real terms.",
          "Even if your bank balance stays the same, your lifestyle may degrade because goods and services cost more."
        ]
      },
      {
        title: "2) Savings erosion: the silent leak",
        text: "Holding large amounts of cash or low-interest savings can feel safe, but inflation quietly erodes their value.",
        points: [
          "Example: If inflation is 6% and your savings earn 3%, you're losing ~3% per year in real terms.",
          "Over long periods, this compounds into a significant loss of wealth."
        ]
      },
      {
        title: "3) Defensive asset allocation",
        text: `${title} forces smarter allocation decisions.`,
        points: [
          "Invest in assets that preserve or grow value.",
          "Balance liquidity with long-term growth.",
          "Avoid excessive idle cash."
        ]
      }
    ]
  }
}
];

/* 🔹 Essentials Data */
export const essentials = [
  {
    title: "Inflation",
    category: "Economy",
    icon: TrendingUp,
    steps: createSteps("Inflation", "A general increase in prices over time."),
  },
  {
    title: "Deflation",
    category: "Economy",
    icon: TrendingDown,
    steps: createSteps("Deflation", "A general decrease in prices over time."),
  },
  {
    title: "Purchasing Power",
    category: "Economy",
    icon: DollarSign,
    steps: createSteps("Purchasing Power", "The value of money in terms of what it can buy."),
  },
  {
    title: "Interest Rates",
    category: "Economy",
    icon: Percent,
    steps: createSteps("Interest Rates", "The cost of borrowing money or return on savings."),
  },
  {
    title: "Federal Reserve",
    category: "Economy",
    icon: Landmark,
    steps: createSteps("Federal Reserve", "The central bank that manages monetary policy."),
  },
  {
    title: "Monetary Policy",
    category: "Economy",
    icon: LineChart,
    steps: createSteps("Monetary Policy", "Actions by central banks to control money supply and interest rates."),
  },
  {
    title: "Fiscal Policy",
    category: "Economy",
    icon: Banknote,
    steps: createSteps("Fiscal Policy", "Government decisions on spending and taxation."),
  },
  {
    title: "Money Supply",
    category: "Economy",
    icon: Wallet,
    steps: createSteps("Money Supply", "The total amount of money circulating in an economy."),
  },
  {
    title: "Quantitative Easing",
    category: "Economy",
    icon: Activity,
    steps: createSteps("Quantitative Easing", "A policy where central banks inject money into the economy."),
  },
  {
    title: "Liquidity",
    category: "Economy",
    icon: Droplets,
    steps: createSteps("Liquidity", "How easily assets can be converted into cash."),
  },
  {
    title: "Recession",
    category: "Economy",
    icon: BarChart,
    steps: createSteps("Recession", "A period of economic decline with reduced activity."),
  },
  {
    title: "Stagflation",
    category: "Economy",
    icon: AlertTriangle,
    steps: createSteps("Stagflation", "High inflation combined with slow economic growth."),
  },
  {
    title: "Sovereign Debt",
    category: "Economy",
    icon: Globe,
    steps: createSteps("Sovereign Debt", "Money borrowed by a government."),
  },
  {
    title: "Reserve Currency",
    category: "Economy",
    icon: Coins,
    steps: createSteps("Reserve Currency", "A currency held globally for trade and reserves."),
  },
  {
    title: "Yield Curve",
    category: "Economy",
    icon: ChartLine,
    steps: createSteps("Yield Curve", "A graph showing interest rates across time periods."),
  },
];