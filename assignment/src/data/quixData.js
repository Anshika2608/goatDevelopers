export const quizData = [
  {
    question:
      "If inflation is 6% and your savings earn 2%, what is happening to your purchasing power?",
    options: [
      {
        text: "It increases",
        isCorrect: false,
        explanation:
          "Your savings are growing slower than inflation, so your purchasing power does not increase.",
      },
      {
        text: "It stays the same",
        isCorrect: false,
        explanation:
          "If your return matched inflation, it would stay the same—but here inflation is higher.",
      },
      {
        text: "It decreases",
        isCorrect: true,
        explanation:
          "When inflation exceeds your return, your money loses real value.",
      },
      {
        text: "It becomes more liquid",
        isCorrect: false,
        explanation:
          "Liquidity refers to how easily you can access money, not its purchasing power.",
      },
    ],
  },
  {
    question:
      "Fractional reserve banking means:",
    options: [
      {
        text: "Banks store 100% of deposits in vaults",
        isCorrect: false,
        explanation:
          "Incorrect because that would be full reserve banking, not fractional reserve banking.",
      },
      {
        text: "Banks lend out a portion of deposits",
        isCorrect: true,
        explanation:
          "Fractional reserve banking means banks keep only part of deposits in reserve and lend the rest, which creates leverage in the system.",
      },
      {
        text: "Banks cannot fail",
        isCorrect: false,
        explanation:
          "Incorrect because banks can fail even in a fractional reserve system."
      },
      {
        text: "Deposits are fully government backed",
        isCorrect: false,
        explanation:
          " Fractional reserve banking means banks keep only part of deposits in reserve and lend the rest, which creates leverage in the system.",
      },
    ],
  },
  {
    question:
      "What does controlling your private key mean?",
    options: [
      {
        text: "The bank holds your crypto",
        isCorrect: false,
        explanation:
"Incorrect because private key control means the user, not a bank, controls access."      },
      {
        text: "You control access to your digital assets",
        isCorrect: true,
        explanation:
          "The private key is the control credential for crypto assets. Whoever controls the key controls the asset.",
      },
      {
        text: "The government guarantees your crypto",
        isCorrect: false,
        explanation:
          "Incorrect because private key ownership has nothing to do with government guarantee.",
      },
      {
        text: "The exchange insures your wallet",
        isCorrect: false,
        explanation:
          "Incorrect because exchange custody and insurance are separate concepts from self-custody via private keys.",
      },
    ],
  },
  {
    question:
      "A bank run happens when:",
    options: [
      {
        text: "Interest rates rise",
        isCorrect: false,
        explanation:
          "Incorrect because rising rates can create stress, but they do not define a bank run."
      },
      {
        text: "Governments print money",
        isCorrect: false,
        explanation:
          "Incorrect because that is a monetary-policy issue, not the definition of a bank run.",
      },
      {
        text: "Many depositors withdraw funds at once",
        isCorrect: true,
        explanation:
          " A bank run is a confidence event where many depositors try to withdraw funds at the same time, which can destabilize even a large institution.",
      },
      {
        text: "Crypto prices fall",
        isCorrect: false,
        explanation:
          "Incorrect because crypto volatility is unrelated to the definition of a bank run.",
      },
    ],
  },
  {
    question:
      "Diversification reduces risk by:",
    options: [
      {
        text: "Concentrating assets in one strong bank",
        isCorrect: false,
        explanation:
          "Incorrect because concentration increases single-point-of-failure risk.",
      },
      {
        text: "Holding only cash",
        isCorrect: false,
        explanation:
          "Incorrect because that is concentration in one asset type and does not diversify systemic exposure.",
      },
      {
        text: "Spreading assets across different types and locations",
        isCorrect: true,
        explanation:
          "Diversification lowers exposure to any one failure point by spreading risk across multiple assets, systems, or jurisdictions.",
      },
      {
        text: "Avoiding all investments",
        isCorrect: false,
        explanation:
          "Incorrect because avoiding investment is not diversification; it is simply non-participation.",
      },
    ],
  },

];