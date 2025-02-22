import React from "react";
import "./BarGraph.css";

function BarGraph({ title, data }) {
    return (
        <div className="bar-graph">
            <div className="bar-graph-container">
                <div className="skill-area">
                    <h2>{title}</h2>
                    {data.map((item, index) => (
                        <div className="box" key={index}>
                            <div className="content">
                                <span>{item.title}</span>
                                <span>{item.percentage}%</span>
                            </div>
                            <div className="line-area">
                                <div
                                    className="bar-line"
                                    style={{
                                        width: "0%",
                                        animation: `fill-animation ${
                                            index * 0.3 + 1.5
                                        }s forwards`,
                                        "--final-width": `${item.percentage}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BarGraph;
