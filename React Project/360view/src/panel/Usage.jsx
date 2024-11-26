import Table from "../component/Table";
import DisplayField from "../component/DisplayField";
import style from "../style/Usage.module.css";

const Usage = () => {
  const amount = ["$123.00", "$12.00", "$12.00"];
  const usage = ["1000kwh", "2000kwh", "1000kwh"];
  return (
    <div className={style.main}>
      <DisplayField label="Average Monthly Usage" value="$211.06" />
      <Table
        header={["", "Jan-23", "Feb-23", "Mar-23"]}
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
