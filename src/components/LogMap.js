import React from "react";
import "./log-map.css";

import MonthLog from "./MonthLog";
const LogMap = ({ data_array, month_filter, sender_filter }) => {
  const [data_keys, setDataKeys] = React.useState([]);
  const [month_map, setMonthMap] = React.useState(new Map());

  const arrayToMapEffect = () => {
    const data_map = new Map();
    data_array?.forEach((data_point, index) => {
      const { sent_at } = data_point;
      const log_date = new Date(sent_at);
      const month = log_date.getMonth();
      if (data_map.has(month)) {
        const month_logs = data_map.get(month);
        month_logs.push(data_point);
        data_map.set(month, month_logs);
      } else {
        data_map.set(month, [data_point]);
      }
    });

    setMonthMap(data_map);
    setDataKeys(Object.keys(data_array[0]));
  };
  React.useEffect(arrayToMapEffect, [data_array]);

  const mapped_logs = React.useMemo(() => {
    const render_components = [];
    month_map.forEach((value, key) => {
      if (!month_filter) {
        render_components.push(
          <MonthLog
            month={key}
            logs={value}
            data_keys={data_keys}
            key={key}
            sender_filter={sender_filter}
          />
        );
      } else if (month_filter === "" + key) {
        render_components.push(
          <MonthLog
            month={key}
            logs={value}
            data_keys={data_keys}
            key={key}
            sender_filter={sender_filter}
          />
        );
      } else {
        console.log(`PASS MONTH ${key}`);
      }
    });

    return render_components;
  }, [month_map, data_keys, month_filter, sender_filter]);

  return (
    <div className="log-map">
      {!!mapped_logs.length ? mapped_logs.map((log) => log) : "no elements"}
    </div>
  );
};

export default LogMap;
