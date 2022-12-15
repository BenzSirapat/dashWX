import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type} </button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Lastest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/736x/e4/ee/ae/e4eeae0fc207456e8d6bd68f4d715a3d.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Katty Leen</span>
          </td>
          <td className="widgetLgDate">2 March 2022</td>
          <td className="widgetLgAmount">$148.00</td>
          <td className="widgetLgStatus">
            <Button type = "Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/736x/e4/ee/ae/e4eeae0fc207456e8d6bd68f4d715a3d.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Katty Leen</span>
          </td>
          <td className="widgetLgDate">2 March 2022</td>
          <td className="widgetLgAmount">$148.00</td>
          <td className="widgetLgSatus">
            <Button type = "Pending"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/736x/e4/ee/ae/e4eeae0fc207456e8d6bd68f4d715a3d.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Katty Leen</span>
          </td>
          <td className="widgetLgDate">2 March 2022</td>
          <td className="widgetLgAmount">$148.00</td>
          <td className="widgetLgSatus">
            <Button type = "Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/736x/e4/ee/ae/e4eeae0fc207456e8d6bd68f4d715a3d.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Katty Leen</span>
          </td>
          <td className="widgetLgDate">2 March 2022</td>
          <td className="widgetLgAmount">$148.00</td>
          <td className="widgetLgSatus">
            <Button type = "Declined"/>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
