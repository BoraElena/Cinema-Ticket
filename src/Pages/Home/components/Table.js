import React from "react";
import "./Table.css";
import clock from "./icon/clock.png";
import movietheater from "./icon/movie-theater.png";
import days from "./icon/days.png";
import Clock from "./Clock";

export default function Table() {
  const contents_1 = [
    {
      field1: "Minion",
      field2: "Mon.",
      field3: "16-17",
    },
    {
      field1: "Doctor Strange",
      field2: "Mon.",
      field3: "19-20",
    },
    {
      field1: "The Ledge",
      field2: "Wed.",
      field3: "20-21",
    },
    {
      field1: "Jurassic World",
      field2: "Mon.",
      field3: "21-22",
    },
    {
      field1: "Sonic",
      field2: "Thu.",
      field3: "17-18",
    },
    {
      field1: "The Secrets of Dumbledore",
      field2: "Tue.",
      field3: "22-23",
    },
    {
      field1: "The Lost City",
      field2: "Sat.",
      field3: "14-15",
    },
  ];

  const Content = [...contents_1];

  return (
    <div className="Table">
      <div>
        <Clock />
      </div>
      <table>
        <thead>
          <tr>
            <th>
              Movie
              <img src={movietheater} alt="" style={{ width: "50px" }}></img>
            </th>
            <th>
              Day
              <img src={days} alt="" style={{ width: "50px" }}></img>
            </th>
            <th>
              Clock
              <img src={clock} alt="" style={{ width: "50px" }}></img>
            </th>
          </tr>
        </thead>
        {Content.map((v, k) => {
          const values = Object.values(v);
          return (
            <tbody key={k} className="tbody">
              <tr>
                {values.map((v) => {
                  return (
                    <td className="td-border" key={v}>
                      {" "}
                      {v}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
