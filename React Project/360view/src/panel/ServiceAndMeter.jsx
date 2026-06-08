import { useState, useEffect } from "react";
import Table from "../component/Table";
import style from "../style/ServiceAndMeter.module.css";
import { accountStatus } from "../lov/translation";
import getServiceAndMetersApi from "../hooks/getServiceAndMetersApi";

const ServiceAndMeter = () => {
  const serviceAndMeterData = getServiceAndMetersApi();
  const [serviceAndMeters, setServiceAndMeters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServiceAndMetersApi();
      setServiceAndMeters(data.serviceAndMeters);
    };

    fetchData();
  }, []);

  return (
    <div className={style.main}>
      <Table
        label="Account Services"
        header={["Service Type", "Service Status", "Rate", "Meter Number"]}
        data={serviceAndMeters.map((i) => {
          return (
            <tr className="tableData">
              <td>{i.serviceType}</td>
              <td>{accountStatus[i.serviceStatus]}</td>
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
