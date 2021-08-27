import React from "react";
import "./month-log.css";

import LogRow from "./LogRow";
import months from "../utils/months";
import Button from "./utils/Button";

const MonthLog = ({ month, logs, data_keys, sender_filter, is_moment }) => {
  const monthNames = React.useMemo(() => {
    return months;
  }, []);

  const [month_sort, setMonthSort] = React.useState(null);
  const [display_logs, setDisplayLogs] = React.useState(logs);

  const monthSortEffect = () => {
    setDisplayLogs((logs) => sortLogs(month_sort, logs));
  };

  React.useEffect(monthSortEffect, [month_sort]);

  const senderFilterEffect = () => {
    if (sender_filter)
      setDisplayLogs((logs) =>
        logs.filter((log) => log.sender === sender_filter)
      );
    else setDisplayLogs(logs);
  };

  React.useEffect(senderFilterEffect, [sender_filter, logs]);

  return (
    <div className="month-log">
      <div className="month-log-heading">
        <h3>{monthNames[month]}</h3>{" "}
        <MonthSort setMonthSort={setMonthSort} month_sort={month_sort} />
      </div>
      <div className="month-log-flex">
        <div className="month-log-key-flex">
          <Key key_string={"ID"} />
          {!!data_keys.length
            ? data_keys.map((key, index) => {
                return <Key key_string={key} key={index} index={index} />;
              })
            : "Invalid data keys"}
        </div>

        <div className="month-log-value-flex">
          {!!display_logs.length
            ? display_logs.map((log) => {
                return <LogRow log={log} key={log.id} is_moment={is_moment} />;
              })
            : `No logs for ${month}`}
        </div>
      </div>
    </div>
  );
};

const Key = ({ key_string }) => {
  const key_name = key_string.split("_").join(" ");
  switch (key_string) {
    case "attachments": {
      return <div className="column-heading">{key_name}</div>;
    }
    case "body_html": {
      return <div className="column-heading html">{key_name}</div>;
    }
    default: {
      return <div className="column-heading">{key_name}</div>;
    }
  }
};

const MonthSort = ({ month_sort, setMonthSort }) => {
  return (
    <div className="month-sort">
      <span>Sort by: </span>
      <Button
        onClick={() => {
          setMonthSort("sender");
          console.time("sort");
        }}
        is_selected={month_sort === "sender"}
      >
        Date
      </Button>
      <Button
        onClick={() => {
          setMonthSort("date");
          console.time("sort");
        }}
        is_selected={month_sort === "date"}
      >
        Sender
      </Button>
      <Button
        onClick={() => {
          setMonthSort("category");
        }}
        is_selected={month_sort === "category"}
      >
        Category
      </Button>
    </div>
  );
};

const sortLogs = (sort, logs) => {
  switch (sort) {
    case "sender": {
      return logs.sort((a, b) => {
        return (a.sender > b.sender) - (a.sender < b.sender);
      });
    }
    case "date": {
      return logs.sort((a, b) => {
        const aDate = new Date(a.sent_at);
        const bDate = new Date(b.sent_at);
        return (
          (aDate.getTime() > bDate.getTime()) -
          (aDate.getTime() < bDate.getTime())
        );
      });
    }
    default: {
      return logs;
    }
  }
};

export default MonthLog;
