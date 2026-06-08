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
    <div>
      <div className={style.container}>
        <DisplayField
          label="Balance Due"
          value={`$${billingAndPayment.balanceDue}`}
        />
        <DisplayField label="Due Date" value={billingAndPayment.dueDate} />
        <DisplayField
          label="Next Reading Window"
          value={billingAndPayment.nextReadingWindow}
        />
        <DisplayField
          label="New Charges"
          value={`$${billingAndPayment.newCharges}`}
        />
        <DisplayField
          label="Current Bill"
          value={`$${billingAndPayment.currentBill}`}
        />
        <DisplayField
          label="Balance Forward"
          value={`$${billingAndPayment.balanceForward}`}
          warning="true"
        />
        <DisplayField
          label="Excess Credit"
          value={`$${billingAndPayment.excessCredit}`}
        />
        <DisplayField
          label="Unbilled Balance"
          value={`$${billingAndPayment.unbilledBalance}`}
        />
        <DisplayField
          label="Pending Payments"
          value={`$${billingAndPayment.pendingPayments}`}
        />
        <DisplayField
          label="Deposit On hand"
          value={`$${billingAndPayment.depositOnHand}`}
        />
        <DisplayField
          label="Deposit Interest"
          value={`$${billingAndPayment.depositInterest}`}
        />
        <DisplayField
          label="Last Payment Amount"
          value={`$${billingAndPayment.lastPaymentAmount}`}
        />
      </div>
    </div>
  );
};

export default BillingAndPayment;
