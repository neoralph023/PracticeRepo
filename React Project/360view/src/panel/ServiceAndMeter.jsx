import Table from "../component/Table";
import style from "../style/ServiceAndMeter.module.css";
import { accountStatus } from "../lov/translation";

const ServiceAndMeter = () => {
  return (
    <div className={style.main}>
      <Table
        label="Account Services"
        header={["Service Type", "Service Status", "Rate", "Meter Number"]}
        data={["000000", accountStatus["01"], "000000", "00000"]}
      />
    </div>
  );
};

export default ServiceAndMeter;
