import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export default function LandingPage() {
    return (
        <div className={style.landing}>
            <h1>Welcome</h1>
            <Link to='/home'>
                Enter
            </Link>
        </div>
    )

}