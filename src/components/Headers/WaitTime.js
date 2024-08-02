import React from "react";

import { ReactComponent as TimerIcon } from "../../assets/icons/TimerIcon.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/icons/DownArrowIcon.svg";

function WaitTime() {
  return (
    <div className="flex-1  text-primary p-2">
      <div className="flex items-center space-x-2 p-2 rounded">
        <TimerIcon />
        <button className="flex items-center space-x-2  py-2 pr-2 rounded">
          <span>View All ER Wait Times</span>
          <DownArrowIcon />
        </button>
      </div>
    </div>
  );
}

export default WaitTime;
