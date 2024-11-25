import style from "../style/PanelContainer.module.css";

const PanelContainer = ({ header, action, children }) => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div>
          <span>{header}</span>
        </div>
        <div>{action}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PanelContainer;
