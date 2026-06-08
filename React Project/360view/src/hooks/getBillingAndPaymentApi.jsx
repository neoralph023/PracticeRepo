const getBillingAndPaymentApi = () => {
  const billingAndPaymentData = {
    billingAndPayment: {
      balanceDue: "1000.08",
      dueDate: "2024-07-15",
      nextReadingWindow: "2024-07-01 to 2024-07-31",
      newCharges: "20.00",
      currentBill: "75.08",
      balanceForward: "0.00",
      excessCredit: "0.00",
      unbilledBalance: "0.00",
      pendingPayments: "0.00",
      depositOnHand: "100.00",
      depositInterest: "5.00",
      lastPaymentAmount: "55.08",
    },
  };

  return billingAndPaymentData;
};

export default getBillingAndPaymentApi;
