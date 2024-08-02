import React from "react";
import WaitTime from "./WaitTime";
import MakeAppointment from "./MakeAppointment";
import Alerts from "./Alerts";

function SecondaryNav() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <WaitTime aria-label="Wait Time" />
      <div className="flex flex-col md:flex-row space-x-4 mr-4">
        <MakeAppointment aria-label="Make Appointment" />
        <Alerts numberOfAlerts={3} aria-label="Alerts" />
      </div>
    </section>
  );
}

export default SecondaryNav;
