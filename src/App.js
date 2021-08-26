import React, { Profiler } from "react";
import "./App.css";

import data_array from "./mock/data.json";
import LogMap from "./components/LogMap";
import Filters from "./components/Filters";

const App = () => {
  const [month_filter, setMonthFilter] = React.useState(null);
  const [sender_filter, setSenderFilter] = React.useState(null);

  return (
    <div className="demo">
      <Stats />
      <div className="App">
        <Filters
          setMonthFilter={setMonthFilter}
          setSenderFilter={setSenderFilter}
        />
        <Profiler id="LogMap" onRender={logTimes}>
          <LogMap
            data_array={data_array}
            month_filter={month_filter}
            sender_filter={sender_filter}
          />
        </Profiler>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats">
      <div id="start-time"></div>
      <div id="commit-time"></div>
    </div>
  );
};

const logTimes = (id, phase, actualTIme, baseTime, startTime, commitTime) => {
  const startTimeEl = document.querySelector("#start-time");
  const commitTimeEl = document.querySelector("#commit-time");

  startTimeEl.innerHTML = `Start Time: ${startTime}ms`;
  commitTimeEl.innerHTML = `Commit Time: ${commitTime - startTime}ms`;
};

export default App;
