import Table from "../component/Table";
import DisplayField from "../component/DisplayField";
import style from "../style/Usage.module.css";
import getUsageApi from "../hooks/getUsageApi";
import { useState, useEffect } from "react";

const Usage = () => {
  const [date, setDate] = useState([]);
  const [amount, setAmount] = useState([]);
  const [usage, setUsage] = useState([]);
  const usageData = getUsageApi();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsageApi();
      const dates = data.usage.map((i) => i.date);
      const amounts = data.usage.map((i) => i.amount);
      const usages = data.usage.map((i) => i.usage);

      setDate(dates);
      setAmount(amounts);
      setUsage(usages);
    };

    fetchData();
  }, []);

  return (
    <div className={style.main}>
      <DisplayField
        label="Average Monthly Usage"
        value={`$${parseFloat(usageData.averageMonthlyUsage).toFixed(2)}`}
      />
      <Table
        header={["", ...date]}
        data={
          <>
            <tr className="tableData">
              <td>Amount</td>
              {amount.map((i) => {
                return <td>{i}</td>;
              })}
            </tr>
            <tr className="tableData">
              <td>kwh</td>
              {usage.map((i) => {
                return <td>{i}</td>;
              })}
            </tr>
          </>
        }
      />
    </div>
  );
};
export default Usage;
