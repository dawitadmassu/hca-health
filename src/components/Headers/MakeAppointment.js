import React from "react";
function MakeAppointment() {
  return (
    <button className="flex items-center space-x-2 bg-primary text-white p-2 rounded">
      <i class="fa-solid fa-calendar-days text-xl"></i>
      <span>Make an appointment</span>
    </button>
  );
}

export default MakeAppointment;
