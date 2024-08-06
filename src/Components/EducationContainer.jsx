import Education from "./Education"
import React from "react"

export default function EducationContainer ({data, onChange}){
    
    return(
        <div className="education-form">
            <h1 className="title">Education </h1>
            <Education
            education={data}
            onChange = {(event)=> onChange(event)}
            />
        </div>
    )
}
