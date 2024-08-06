import React from "react"

export default function Education({education, onChange}){

    return(
            <>
                    <input 
                    type="text" 
                    placeholder="university"
                    name="university" 
                    value={education.university} 
                    onChange={(event) => onChange(event)}
                    className="education-inputs"
                    required/>
                    <br/>
                    <input 
                    placeholder="Name of study"
                    type="text" 
                    name="degree" 
                    value={education.degree}
                    onChange={(event) => onChange(event)}
                    className="education-inputs"
                    required  
                    />
                    <br/>
                    <input
                    type="text"
                    name="startYear"
                    placeholder="start year"
                    value={education.startYear}
                    onChange={(event) => onChange(event)}
                    className="education-inputs"
                    required/>
                    <br/>
                    <input
                    placeholder="end year"
                    type="text"
                    name="endYear"
                    value={education.endYear}
                    onChange={(event) => onChange(event)}
                    className="education-inputs"
                    required/>
                    <br/>
            </>
        )
}