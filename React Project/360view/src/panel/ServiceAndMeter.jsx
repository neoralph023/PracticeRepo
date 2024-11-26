import Table from "../component/Table";
import style from "../style/ServiceAndMeter.module.css";
import { accountStatus } from "../lov/translation";

const ServiceAndMeter = () => {
  const serviceMeterArray = [
    {
      serviceType: "000000",
      serviceStatus: accountStatus["01"],
      rate: "000000",
      meterNumber: "00000",
    },
    {
      serviceType: "000000",
      serviceStatus: accountStatus["02"],
      rate: "000000",
      meterNumber: "00000",
    },
  ];
  return (
    <div className={style.main}>
      <Table
        label="Account Services"
        header={["Service Type", "Service Status", "Rate", "Meter Number"]}
        data={serviceMeterArray.map((i) => {
          return (
            <tr className="tableData">
              <td>{i.serviceType}</td>
              <td>{i.serviceStatus}</td>
              <td>{i.rate}</td>
              <td>{i.meterNumber}</td>
            </tr>
          );
        })}
      />
    </div>
  );
};

export default ServiceAndMeter;
