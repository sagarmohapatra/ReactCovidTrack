
import React, { useState, useEffect } from "react";
import './Covid.css';
let Covid = () => {
    let [start, setstart] = useState(

        []

    )
    let getcovidData = async () => {
        try {
            let res = await fetch('https://data.covid19india.org/data.json');
            let actual = await res.json();
            console.log(actual.statewise[0])
            setstart(actual.statewise[0]);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getcovidData();


    }, []);

    return (
        <React.Fragment className="may">
            <section className="main bg-dark ">
                <h1 className="live text-white">🔴 LIVE</h1>
                <h2 className="write text-white">COVID-19 CORONAVIROUS TRACKER</h2>
                <ul className="container sec">
                    <li className="card bg-primary">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className=" card_name mt-3"><span className="s1 ">OUR</span>COUNTRY</p>
                                <p className="card_total card_small">INDIA</p>
                            </div>
                        </div>

                    </li>
                    <li className="card bg-info">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className=" card_name mt-3"><span className="s1 ">TOTAL</span>RECOVERED</p>
                                <p className="card_total card_small">{start.recovered}</p>
                            </div>
                        </div>

                    </li>
                    <li className="card bg-success">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className=" card_name mt-3"><span className="s1 ">TOTAL</span>CONFIRMED</p>
                                <p className="card_total card_small">{start.confirmed}</p>
                            </div>
                        </div>

                    </li>




                </ul>
                <ul className="container sec">
                    <li className="card bg-success">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className=" card_name mt-3"><span className="s1 ">TOTAL</span>DEATH</p>
                                <p className="card_total card_small">{start.deaths}</p>
                            </div>
                        </div>

                    </li>
                    <li className="card bg-primary">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className=" card_name mt-3"><span className="s1 ">TOTAL</span>ACTIVE</p>
                                <p className="card_total card_small">{start.active}</p>
                            </div>
                        </div>

                    </li>
                    <li className="card bg-warning">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className=" card_name mt-3"><span className="s1 ">LAST</span>UPDATED</p>
                                <p className="card_total card_small">{start.lastupdatedtime}</p>
                            </div>
                        </div>

                    </li>
                </ul>
            </section>
        </React.Fragment>
    )
}
export default Covid;