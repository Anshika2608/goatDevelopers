const baseData = [
  { title: "Inflation", desc: "A general increase in prices over time." },
  { title: "Deflation", desc: "A decrease in overall prices." },
  { title: "Purchasing Power", desc: "The amount of goods/services your money can buy." },
  { title: "Interest Rates", desc: "The cost of borrowing money." },
  { title: "Federal Reserve", desc: "The U.S. central bank." },
  { title: "Monetary Policy", desc: "Actions taken by central banks to manage money supply." },
  { title: "Fiscal Policy", desc: "Government spending and taxation decisions." },
  { title: "Gross Domestic Product", desc: "Total value of goods produced and services provided." },
  { title: "Consumer Price Index", desc: "A measure of the average change in prices over time." },
  { title: "Recession", desc: "A period of temporary economic decline." },
  { title: "Depression", desc: "A long and severe recession in an economy or market." },
  { title: "Bull Market", desc: "A market in which share prices are rising." },
  { title: "Bear Market", desc: "A market in which share prices are falling." },
  { title: "Liquidity", desc: "The availability of liquid assets to a market or company." },
  { title: "Asset Allocation", desc: "An investment strategy that aims to balance risk and reward." },
  { title: "Diversification", desc: "A technique that reduces risk by allocating investments." },
  { title: "Compound Interest", desc: "Interest calculated on the initial principal and accumulated interest." },
  { title: "Capital Gains", desc: "A profit from the sale of property or an investment." },
  { title: "Dividends", desc: "A sum of money paid regularly by a company to its shareholders." },
  { title: "Bonds", desc: "A fixed income instrument that represents a loan." },
  { title: "Equities", desc: "Shares representing ownership interest in a corporation." },
  { title: "Derivatives", desc: "A financial security with a value that is reliant upon an underlying asset." },
  { title: "Hedge Fund", desc: "An offshore investment fund formed as a private limited partnership." },
  { title: "Private Equity", desc: "Capital that is not noted on a public exchange." },
  { title: "Venture Capital", desc: "Financing that investors provide to startup companies." },
];

// 🔁 generate 50 items
export const mockTerms = Array.from({ length: 50 }, (_, i) => {
  const item = baseData[i % baseData.length];

  return {
    id: i + 1,
    title: item.title,
    desc: item.desc,
    top: i < 15, // ✅ first 15 = Top 15
  };
});