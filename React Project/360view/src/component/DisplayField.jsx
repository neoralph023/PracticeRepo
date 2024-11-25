import style from "../style/DisplayField.module.css";

const DisplayField = (props) => {
  return (
    <div className={style.container}>
      <div className={style.label}>{props.label}</div>
      <div className={props.warning ? style.warningValue : style.regularValue}>
        {props.value}
      </div>
    </div>
  );
};

export default DisplayField;
