import React from "react";
import WaitTime from "./WaitTime";
import MakeAppointment from "./MakeAppointment";
import Alerts from "./Alerts";
function Header2() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <WaitTime />
      <div className="flex flex-col md:flex-row space-x-4 mr-4">
        <MakeAppointment />
        <Alerts numberOfAlerts={3} />
      </div>
    </div>
  );
}

export default Header2;
