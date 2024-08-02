import React from "react";

import { ReactComponent as AlertIcon } from "../../assets/icons/AlertIcon.svg";

function Alerts({ numberOfAlerts }) {
  return (
    <div className="flex items-center space-x-2 bg-red-300 text-black p-2  rounded relative">
      <AlertIcon />

      <span>Alerts</span>
      <span className=" bg-white text-red-500 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
        {numberOfAlerts ? numberOfAlerts : 0}
      </span>
    </div>
  );
}

export default Alerts;
