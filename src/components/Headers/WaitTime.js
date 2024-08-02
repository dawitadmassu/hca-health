import React from "react";

function WaitTime() {
  return (
    <div className="flex-1 text-primary p-2">
      <div className="flex items-center space-x-2 p-2 rounded">
        <button
          className="flex items-center space-x-2 py-2 pr-2 rounded"
          aria-label="View All ER Wait Times"
        >
          <i className="fas fa-clock text-xl" aria-hidden="true"></i>
          <span>View All ER Wait Times</span>
          <i className="fa-solid fa-caret-down" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default WaitTime;
