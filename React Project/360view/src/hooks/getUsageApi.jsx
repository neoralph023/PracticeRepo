const getUsageApi = () => {
  const usageData = {
    usage: [
      {
        date: "2024-06-01",
        amount: "200",
        usage: "1000kwh",
      },
      {
        date: "2024-06-02",
        amount: "200",
        usage: "1000kwh",
      },
      {
        date: "2024-06-03",
        amount: "200",
        usage: "1000kwh",
      },
    ],
    averageMonthlyUsage: "211.06",
  };

  return usageData;
};

export default getUsageApi;
