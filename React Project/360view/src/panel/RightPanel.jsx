import { useState } from "react";
import style from "../style/RightPanel.module.css";
import QuickViewPanel from "./QuickViewPanel";

const RightPanel = () => {
  const tabs = [
    { label: "Quick View", component: <QuickViewPanel /> },
    { label: "Tab 2", component: <div>TEST</div> },
    { label: "Tab 3", component: <div>TEST</div> },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className={style.tabContainer}>
        {tabs.map((tab, index) => (
          <div
            className={`${style.tab} ${activeTab === index ? style.activeTab : ""}`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      <div className={style.tabContent}>{tabs[activeTab].component}</div>
    </div>
  );
};

export default RightPanel;
