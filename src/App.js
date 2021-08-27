import React, { Profiler } from "react";
import "./App.css";

import data_array from "./mock/data.json";
import LogMap from "./components/LogMap";
import Filters from "./components/Filters";

const App = () => {
  const [month_filter, setMonthFilter] = React.useState(null);
  const [sender_filter, setSenderFilter] = React.useState(null);
  const [is_moment, setMomentToggle] = React.useState(false);

  return (
    <div className="demo">
      <Stats />
      <div className="App">
        <Filters
          setMonthFilter={setMonthFilter}
          setSenderFilter={setSenderFilter}
          setMomentToggle={setMomentToggle}
          is_moment={is_moment}
        />
        <Profiler id="LogMap" onRender={logTimes}>
          <LogMap
            data_array={data_array}
            month_filter={month_filter}
            sender_filter={sender_filter}
            is_moment={is_moment}
          />
        </Profiler>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats">
      <div id="phase"></div>
      <div id="render-time"></div>
      <div id="commit-time"></div>
    </div>
  );
};

const logTimes = (id, phase, actualTIme, baseTime, startTime, commitTime) => {
  const phaseEl = document.querySelector("#phase");
  const renderDurationEl = document.querySelector("#render-time");
  const commitDurationEl = document.querySelector("#commit-time");

  phaseEl.innerHTML = `Phase: ${phase}`;
  renderDurationEl.innerHTML = `Base Render Time: ${baseTime}ms`;
  commitDurationEl.innerHTML = `Commit Time: ${commitTime - startTime}ms`;
};

export default App;
