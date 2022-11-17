import React from "react";
import moviesS from '../catalog/base/video_api1.json';
import axios from "axios";

import './films.css'

function Films () {
    return (
        <main className= "films-container">

            <div className="title">
            <h1 className="films-title">films</h1>

                <input className="search" type="search" placeholder={'Название'}></input>

                <select className="search list" id="selectID">

                    <option value={"new"}>Новые</option>
                    <option value={"old"}>Старые</option>
                    <option value={"rate"}>Рейтинговые</option>

                </select>

                <button className="search s-btn">Искать</button>
            </div>

            <div className="films">

                {moviesS.data.map((item, index) => {
                    return (
                        <div className="film">
                            <h1 className="films-title">{item.title}</h1>
                            <iframe src={item.iframe_src}
                                    width="400"
                                    height="300"
                                    //frameBorder="0"
                                    allowFullScreen>
                            </iframe>
                        </div>

                        //console.log (item.kp_id)
                         //<div className="film"
                         //onClick={() => window.location.assign(item.iframe_src)}>
                    // {item.title}
                    // </div>
                    )
                })
                }
                {/*<div className="film">film</div>*/}
                {/*<div className="film">{moviesS.data[0].title}</div>*/}
                {/*<div className="film">{moviesS.data[1].title}</div>*/}
                {/*<div className="film">film</div>*/}
                {/*<div className="film">film</div>*/}

                {/*<iframe src="//8886534688564.svetacdn.in/wxB53DyCmVwt/movie/1\" width="400" height="300" frameborder="0"*/}
                {/*        allowFullScreen></iframe>*/}

            </div>
        </main>
    )
}

export default Films;