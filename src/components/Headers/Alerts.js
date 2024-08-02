import React from "react";

function Alerts({ numberOfAlerts }) {
  return (
    <button
      className="flex items-center space-x-2 bg-red-300 text-black p-2 rounded relative"
      aria-label="Alerts"
    >
      <i
        className="fa fa-exclamation-triangle text-red-600"
        aria-hidden="true"
        aria-label="Alert icon"
      ></i>

      <span>Alerts</span>
      <span
        className="bg-white text-red-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
        aria-label={`${numberOfAlerts} alerts`}
      >
        {numberOfAlerts}
      </span>
    </button>
  );
}

export default Alerts;
