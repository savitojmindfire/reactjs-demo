import React from "react";
import "./log-row.css";

import moment from "moment";

const LogRow = ({ log, is_moment }) => {
  console.timeLog("load");
  console.timeLog("filter");
  console.timeLog("sort");

  return (
    <div className="log-row">
      <div className="log-row-cell">{log.id}</div>
      {Object.keys(log).map((key, i) => {
        switch (key) {
          case "body_html": {
            return (
              <div
                className="log-row-cell html"
                dangerouslySetInnerHTML={{ __html: log[key] }}
                key={i}
              ></div>
            );
          }
          case "attachments": {
            const parse_attachments = JSON.parse(log[key]);
            return (
              <ul className="log-row-cell" key={i}>
                {Object.keys(parse_attachments).map((screen_shot, j) => {
                  return <li key={j}>{screen_shot}</li>;
                })}
              </ul>
            );
          }
          case "sent_at": {
            return <TimeCell time={log[key]} is_moment={is_moment} key={i} />;
          }
          default: {
            return (
              <div className="log-row-cell" key={i}>
                {log[key]}
              </div>
            );
          }
        }
      })}
    </div>
  );
};

const TimeCell = ({ time, is_moment }) => {
  const [time_since, setTimeSince] = React.useState(time);

  const momentEffect = () => {
    if (is_moment) {
      setTimeSince(() => getTimeSince(time));
    } else {
      setTimeSince(time);
    }
  };

  React.useEffect(momentEffect, [is_moment, time]);
  return <div className="log-row-cell">{time_since}</div>;
};

const getTimeSince = (timeString) => {
  const time = new Date(timeString);
  const now = Date.now();

  if (now > time) {
    const nowMoment = moment(now);
    const timeSince = nowMoment.diff(time, "days");
    return `${timeSince} days ago`;
  } else {
    const timeMoment = moment(time);
    const timeInFuture = timeMoment.diff(now, "days");
    return `${timeInFuture} days from now`;
  }
};
export default LogRow;
