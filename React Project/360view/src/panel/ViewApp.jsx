import BillingAndPayment from "./BillingAndPayment";
import ServiceAndMeter from "./ServiceAndMeter";
import Usage from "./Usage";
import style from "../style/ViewApp.module.css";
import PanelContainer from "../component/PanelContainer";

const ViewApp = () => {
  return (
    <div className={style.container}>
      <div className={style.billing}>
        <PanelContainer header="Billing and Payment" action={<button>Activity Statement</button>}>
          <BillingAndPayment />
        </PanelContainer>
      </div>
      <div className={style.serviceMeter}>
        <PanelContainer header="Service and Meter">
          <ServiceAndMeter />
        </PanelContainer>
      </div>

      <div className={style.usage}>
        <PanelContainer header="Usage">
          <Usage />
        </PanelContainer>
      </div>
    </div>
  );
};

export default ViewApp;
