
import Experience from "./Experience";

export default function ExperienceContainer({data,onChange,onAdd,onDelete}) {
    
    const experienceItems = data.map((item, index) => (
        <Experience
            key={item.id}
            id={item.id}
            experience={item}
            onChange={(event) => onChange(event, index)}
            onDelete={() => onDelete(item.id)}
        />
    ));

    return (
        <div className="experience-form">
            <h1 className="title">Experience</h1>
            {experienceItems}
            <button onClick={onAdd} className="experience-btn">Add</button>
        </div>
    );
}
