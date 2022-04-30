import React from "react";
import "./App.css";
import ReactEcharts from "echarts-for-react";

function App() {
    const op = {
        title: {
            text: "",
        },
        tooltip: {},
        legend: {
            data: ["Evaporation", "Precipitation", "Temperature"],
        },
        xAxis: {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: [
            {
                type: "value",
                name: "Precipitation",
                min: 0,
                max: 250,
                interval: 50,
                position: "left",
                axisLabel: {
                    formatter: "{value} ml",
                },
            },
            {
                type: "value",
                name: "Temperature",
                min: 0,
                max: 25,
                interval: 5,
                position: "right",
                axisLabel: {
                    formatter: "{value} °C",
                },
            },
        ],
        series: [
            {
                name: "Evaporation",
                type: "bar",
                yAxisIndex: 0,
                data: [5, 7, 10, 22, 24, 78, 135],
            },
            {
                name: "Precipitation",
                type: "bar",
                yAxisIndex: 0,
                data: [6, 9, 13, 25, 26, 70, 175],
            },
            {
                name: "Temperature",
                type: "line",
                yAxisIndex: 1,
                data: [2.2, 2.5, 3.4, 4.7, 6, 10.1, 20.2, 23.5],
            },
        ],
    };
    console.log(op);
    return <ReactEcharts option={op} />;
}

export default App;
