import style from "../style/Table.module.css";

const Table = ({ label, header, data }) => {
  console.log(header);
  return (
    <table>
      <tbody>
        <td colSpan={4} className={style.label}>
          {label}
        </td>
        <tr>
          {header.map((i) => {
            return <td>{i}</td>;
          })}
        </tr>
        <tr className={style.data}>
          {data.map((i) => {
            return <td>{i}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
