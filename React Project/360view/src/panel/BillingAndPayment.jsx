import DisplayField from "../component/DisplayField";
import style from "../style/BillingAndPayment.module.css";
import { useEffect, useState } from "react";
import getBillingAndPaymentApi from "../hooks/getBillingAndPaymentApi";

const BillingAndPayment = () => {
  const billingAndPaymentData = getBillingAndPaymentApi();
  const [billingAndPayment, setBillingAndPayment] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBillingAndPaymentApi();
      setBillingAndPayment(data.billingAndPayment);
    };

    fetchData();
  }, []);

  return (
    billingAndPayment && (
      <div>
        <div className={style.container}>
          <DisplayField
            label="Balance Due"
            value={`$${parseFloat(billingAndPayment.balanceDue).toFixed(2)}`}
          />
          <DisplayField label="Due Date" value={billingAndPayment.dueDate} />
          <DisplayField
            label="Next Reading Window"
            value={billingAndPayment.nextReadingWindow}
          />
          <DisplayField
            label="New Charges"
            value={`$${parseFloat(billingAndPayment.newCharges).toFixed(2)}`}
          />
          <DisplayField
            label="Current Bill"
            value={`$${parseFloat(billingAndPayment.currentBill).toFixed(2)}`}
          />
          <DisplayField
            label="Balance Forward"
            value={`$${parseFloat(billingAndPayment.balanceForward).toFixed(2)}`}
            warning="true"
          />
          <DisplayField
            label="Excess Credit"
            value={`$${parseFloat(billingAndPayment.excessCredit).toFixed(2)}`}
          />
          <DisplayField
            label="Unbilled Balance"
            value={`$${parseFloat(billingAndPayment.unbilledBalance).toFixed(2)}`}
          />
          <DisplayField
            label="Pending Payments"
            value={`$${parseFloat(billingAndPayment.pendingPayments).toFixed(2)}`}
          />
          <DisplayField
            label="Deposit On hand"
            value={`$${parseFloat(billingAndPayment.depositOnHand).toFixed(2)}`}
          />
          <DisplayField
            label="Deposit Interest"
            value={`$${parseFloat(billingAndPayment.depositInterest).toFixed(2)}`}
          />
          <DisplayField
            label="Last Payment Amount"
            value={`$${parseFloat(billingAndPayment.lastPaymentAmount).toFixed(2)}`}
          />
        </div>
      </div>
    )
  );
};

export default BillingAndPayment;
