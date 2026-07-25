import React from "react";
import styles from "../style/LeftPanel.module.css";
import DisplayField from "../component/DisplayField";

const LeftPanel = () => {
  return (
    <div className="left">
      <div className={styles.left_panel_container}>
        <div className={styles.primary_info}>
          <div className={styles.account_number}>123456789</div>
          <div className={styles.account_name}>John Doe</div>
          <div className={styles.account_address}>
            123 Main St, City, State, ZIP
          </div>
        </div>

        <div className={styles.account_info_title}>Account Information</div>
        <div className={styles.account_info_container}>
          <DisplayField label="Revenu Class" value="Some Value" />
          <DisplayField label="Account Status" value="Some Value" />
          <DisplayField label="Account Type" value="Some Value" />
          <DisplayField label="Collection Status" value="Some Value" />
          <DisplayField label="On Summary Bill" value="Some Value" />
          <DisplayField label="Account Open Date" value="Some Value" />
          <DisplayField label="Priority" value="Some Value" />
          <DisplayField label="SSN" value="Some Value" />
          <DisplayField label="Web/Vru" value="Some Value" />
          <DisplayField label="Primary Phone" value="Some Value" />
          <DisplayField label="Cash Only" value="Some Value" />
          <DisplayField label="Bankruptcy" value="Some Value" />
          <DisplayField label="Email Address" value="Some Value" />
          <DisplayField label="Operating Center" value="Some Value" />
          <DisplayField label="Credit Rating" value="Some Value" />
          <DisplayField label="Web Access Code" value="Some Value" />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
