import Chart from "../../chart/Chart";
import FeatureInfo from "../../featureInfo/FeatureInfo";
import "./Home.css";
import { Userdata } from "../../../DummyData";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

const Home = () => {
  return (
    <div className="Home">
      <FeatureInfo />
      <Chart
        data={Userdata}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="HomeWidgets">    
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
