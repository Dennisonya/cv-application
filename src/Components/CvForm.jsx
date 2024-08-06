import React from "react";

const CvForm = React.forwardRef(({ data }, ref) => {
    return (
        <div className="cv-form" ref={ref}>
            <div className="personal-data">
                <h1 className="title">Personal Information</h1>
                <div className="thin-borderline"></div>
                <h3>First Name: {data.personal.firstName}</h3>
                <h3>Last Name: {data.personal.lastName}</h3>
                <h3>Job title: {data.personal.jobTitle}</h3>
                <h3>Address: {data.personal.address}</h3>
                <h3>Country: {data.personal.country}</h3>
                <h3>Phone: {data.personal.phone}</h3>
                <h3>Email: {data.personal.email}</h3>
            </div>
            <div className="education-info">
                <h2 className="title">Education</h2>
                <div className="thin-borderline"></div>
                <h3>University: {data.education.university}</h3>
                <h3>Degree: {data.education.degree}</h3>
                <h3>Start Year: {data.education.startyear}</h3>
                <h3>End Year: {data.education.endYear}</h3>
            </div>
            <div className="work-experience">
                <h2 className="title">Work Experience</h2>
                <div className="thin-borderline"></div>
                {data.experience.map((items) => (
                    <div className="experience-items" key={items.id}>
                        <h3>Company: {items.company}</h3>
                        <h3>Address: {items.address}</h3>
                        <h3>Position: {items.position}</h3>
                        <h3>Duration: {items.startDate} - {items.endDate}</h3>
                        <p className="experience-description"><strong>Description:</strong> {items.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default CvForm;
