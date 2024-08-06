
export default function Experience({id,onChange,onDelete,experience}){
    
    return(
        <>
                <input 
                placeholder="Company name"
                name="company"
                value={experience.company}
                onChange={(event) =>onChange(event,id)}
                type="text"
                required
                className="experience-inputs"
                />
                <br/>
                <input 
                placeholder="Address"
                name="address"
                value={experience.address}
                onChange={(event) =>onChange(event,id)}
                type="text"
                required
                className="experience-inputs"
                />
                <br/>
                <input 
                placeholder="Position"
                name="position"
                value={experience.position}
                onChange={(event) =>onChange(event,id)}
                type="text"
                required
                className="experience-inputs"
                />
                <br />
                <input 
                placeholder="start date"
                name="startDate"
                value={experience.startDate}
                onChange={(event) =>onChange(event,id)}
                type="text"
                required
                className="experience-inputs"
                />
                <br />
                <input 
                type="text" 
                placeholder="end date"
                name= "endDate"
                value={experience.endDate}
                onChange={(event) =>onChange(event,id)}
                required
                className="experience-inputs"
                />
                <br />
                <textarea 
                placeholder="description"
                name="description"
                value={experience.description}
                onChange={(event) =>onChange(event,id)}
                required
                className="experience-textarea"
                />
                <br/>
            <button onClick={()=>onDelete(id)} className="experience-btn">Delete This entry</button>
        </>
    )
}