import { emptyCv } from "./emptyCv";
import Personal from "./Personal";
import React, { useState } from "react";

function PersonalContainer ({data, onChange}){

    return(
        <div className="personal-form">
            <h1>PERSONAL</h1>
            <Personal
            personal= {data}
            onChange = {(event)=> onChange(event)}
        />
        </div>
    )
}

export default PersonalContainer