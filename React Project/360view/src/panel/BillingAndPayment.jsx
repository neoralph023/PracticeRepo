import DisplayField from "../component/DisplayField";
import style from "../style/BillingAndPayment.module.css";

const BillingAndPayment = () => {
  return (
    <div>
      <div className={style.container}>
        <DisplayField label="Balance Due" value="$55.08" />
        <DisplayField label="Due Date" value="$55.08" />
        <DisplayField label="Next Reading Window" value="$55.08" />
        <DisplayField label="New Charges" value="$55.08" />
        <DisplayField label="Current Bill" value="$55.08" />
        <DisplayField label="Balance Forward" value="$55.08" warning="true" />
        <DisplayField label="Excess Credit" value="$55.08" />
        <DisplayField label="Unbilled Balance" value="$55.08" />
        <DisplayField label="Pending Payments" value="$55.08" />
        <DisplayField label="Deposit On hand" value="$55.08" />
        <DisplayField label="Deposit Interest" value="$55.08" />
        <DisplayField label="Last Payment Amount" value="$55.08" />
      </div>
    </div>
  );
};

export default BillingAndPayment;
