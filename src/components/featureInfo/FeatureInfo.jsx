import "./FeatureInfo.css";
import { ArrowDownward,ArrowUpward } from "@mui/icons-material/";
const FeatureInfo = () => {
  return (
    <div className="featured">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$2,502</span>
          <span className="featureMoneyRate">
            -11.4 <ArrowDownward  className="featureIcon negative"/>
          </span>
        </div>
        <span className="furetureSubtitle">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sale</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$3,829</span>
          <span className="featureMoneyRate">
            -1.4 <ArrowDownward className="featureIcon negative"/>
          </span>
        </div>
        <span className="furetureSubtitle">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">$1,829</span>
          <span className="featureMoneyRate">
            +3.2 <ArrowUpward className="featureIcon"/>
          </span>
        </div>
        <span className="furetureSubtitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeatureInfo;
