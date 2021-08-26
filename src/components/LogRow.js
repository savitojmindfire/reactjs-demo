import React from "react";
import "./log-row.css";
const LogRow = ({ log }) => {
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
export default LogRow;
