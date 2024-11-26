import style from "../style/Table.module.css";

const Table = ({ label, header, data }) => {
  console.log(header);
  return (
    <table>
      <tbody>
        {label && (
          <td colSpan={4} className={style.label}>
            {label}
          </td>
        )}

        <tr className={style.header}>
          {header.map((i) => {
            return <td>{i}</td>;
          })}
        </tr>
        {data}
      </tbody>
    </table>
  );
};

export default Table;
