import DisplayField from "../component/DisplayField";
import style from "../style/BillingAndPayment.module.css";

const BillingAndPayment = () => {
  return (
    <div>
      <div className={style.container}>
        <DisplayField className={style.item1} label="Balance Due" value="$55.08" />
        <DisplayField className={style.item2} label="Due Date" value="$55.08" />
        <DisplayField className={style.item3} label="Next Reading Window" value="$55.08" />
        <DisplayField className={style.item4} label="New Charges" value="$55.08" />
        <DisplayField className={style.item5} label="Current Bill" value="$55.08" />
      </div>
    </div>
  );
};

export default BillingAndPayment;
