import style from "../style/DisplayField.module.css";

const DisplayField = (props) => {
  return (
    <div className={style.container}>
      <div className={style.label}>{props.label}</div>
      <div className={style.value}>{props.value}</div>
    </div>
  );
};

export default DisplayField;
