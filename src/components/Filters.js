import React from "react";
import "./filters.css";
const Filter = ({ setMonthFilter, setSenderFilter }) => {
  return (
    <div className="filters">
      {[
        <div className="filter" key={0}>
          <select
            placeholder="sender"
            className="filter-select"
            onChange={(e) => {
              setMonthFilter(e.target.value);
              console.time("filter");
            }}
          >
            <option value="">Select month</option>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
        </div>,
        <div className="filter" key={1}>
          <select
            placeholder="sender"
            className="filter-select"
            onChange={(e) => {
              setSenderFilter(e.target.value);
              console.time("filter");
            }}
          >
            <option value="">Select sender</option>
            <option value="amitabh">Amitabh</option>
            <option value="gaurav">Gaurav</option>
            <option value="sambit">Sambit</option>
            <option value="aumya">Saumya</option>
            <option value="savitoj">Savitoj</option>
          </select>
        </div>,
      ]}
    </div>
  );
};

export default Filter;
