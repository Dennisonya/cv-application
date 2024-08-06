import React from "react";

function Personal({ personal, onChange }) {
    return (
        <>
            <input 
                type="text" 
                name="firstName" 
                value={personal.firstName} 
                placeholder="First Name"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
            <br/>
            <input 
                type="text" 
                name="lastName" 
                value={personal.lastName} 
                placeholder="Last Name"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
            <br />
            <input 
                type="text" 
                name="jobTitle" 
                value={personal.jobTitle} 
                placeholder="Job title"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
            <br/>
            <input 
                type="email" 
                name="email" 
                value={personal.email} 
                placeholder="Email"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
            <br />
            <input 
                type="number" 
                name="phone" 
                value={personal.phone} 
                placeholder="Phone Number"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
            <br />
            <input 
                type="text" 
                name="address" 
                value={personal.address} 
                placeholder="Address"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
            <br />
            <input 
                type="text" 
                name="country" 
                value={personal.country} 
                placeholder="Country"
                onChange={onChange}
                required 
                className="personal-inputs"
            />
        </>
    );
}

export default Personal;
