import React from "react";
import { ReactComponent as CalenderIcon } from "../../assets/icons/CalenderIcon.svg";
function MakeAppointment() {
  return (
    <div className="flex items-center space-x-2 bg-primary text-white p-2 rounded">
      <CalenderIcon className="size-6" />

      <span>Make an appointment</span>
    </div>
  );
}

export default MakeAppointment;
