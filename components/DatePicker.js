import React, { useState } from "react";

export default function DatePicker({ dateSetter }) {
  // Fix for if someone using this component
  // is stupid enough to not provide a function
  // we call when the date changes
  dateSetter = typeof dateSetter === "function" ? dateSetter : () => { };

  let months = [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december",
  ];

  let weekdays = [
    "måndag",
    "tisdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lördag",
    "söndag",
  ];

  const [today, setToday] = useState(new Date());

  const [markedDate, setMarkedDate] = useState(new Date());

  let month = months[today.getMonth()] + " " + today.getFullYear();

  let startDate = new Date(today.getTime());
  startDate.setDate(1);
  while (startDate.getDay() !== 1) {
    // subtract 1 dygn until we reach a monday
    startDate = new Date(startDate.getTime() - 24 * 60 * 60 * 1000);
  }

  let endDate = new Date(today.getTime());
  let monthNum = today.getMonth();
  // get to the last date of the month
  while (endDate.getMonth() == monthNum) {
    endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  }
  while (endDate.getDay() !== 1) {
    endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  }

  let dates = [];
  let x = new Date(startDate.getTime());
  let subArray;
  let counter = 0;
  while (x < endDate) {
    if (counter === 0) {
      subArray = [];
      dates.push(subArray);
    }
    subArray.push(x);
    x = new Date(x.getTime() + 24 * 60 * 60 * 1000);
    counter++;
    if (counter == 7) {
      counter = 0;
    }
  }

  const back = () => {
    let x = new Date(today.getTime());
    x.setMonth(x.getMonth() - 1);
    setToday(x);
  };

  const forward = () => {
    let x = new Date(today.getTime());
    x.setMonth(x.getMonth() + 1);
    setToday(x);

  };

  // return different css class if markedDate
  const getClass = (date) => {
    if (markedDate.toDateString() === date.toDateString()) {
      return "bg-gray-800";
    }
    return "";
  };

  // change the date and send the new date to the component
  // that mounted us
  const changeDate = (date) => {
    setMarkedDate(date);
    dateSetter(date);
  };

  return (
    <div className="bg-gray-400 text-white rounded w-[170px] pb-2 pt-2 m-1">
      <h1 className="text-center text-[14px]">
        <span className="m-2" onClick={back}>
          &lt;
        </span>
        {month}
        <span className="m-2" onClick={forward}>
          &gt;
        </span>
      </h1>
      <table className="text-center text-[13px] ml-3">
        <tr>
          {weekdays.map((x, i) => (
            <td key={i}>{x.slice(0, 3)}</td>
          ))}
        </tr>
        {dates.map((week, i) => (
          <tr key={i}>
            {week.map((date) => (
              <td
                onClick={() => changeDate(date)}
                className={getClass(date)}
                key={date.getDate()}
              >
                {date.getDate()}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
