const getServiceAndMetersApi = () => {
  const serviceAndMetersData = {
    serviceAndMeters: [
      {
        serviceStatus: "02",
        meterNumber: "123456789",
        meterType: "Smart Meter",
        lastReading: "2024-06-01",
        nextReading: "2024-07-01",
        rate: "0.15",
        serviceType: "Electricity",
      },
    ],
  };

  return serviceAndMetersData;
};

export default getServiceAndMetersApi;
