import uuid from 'react-uuid';


export const exampleCv ={
    personal:{
        firstName: 'Abraham',
        lastName: 'Lincon',
        jobTitle: 'Web Developer',
        email: 'abrahamissabaddie@gmail.com',
        phone: '+123 888 888 888',
        address: '64 panther Drive',
        city: 'New york city',
        country: 'India'
    },
    education:{
        degree: 'Bachelors Degree in Compupter science',
        university: 'Havard University',
        startYear: '2020',
        endYear: '2024'
    },
    experience:[
        {
        id: uuid(),
        company: 'Microsoft',
        address: 'Fake address 5th panther drive',
        position: 'Junior Web Dev',
        startDate: '3/1/2023',
        endDate: '4/20/2023',
        description: 'Participated in daily stand-ups and contributed to sprint planning, code reviews, and team meetings as part of an Agile development team.'
    },
    {
        id: uuid(),
        company: 'Amazon',
        address:'Fake address 2ndr drive',
        position: 'Front end Developer',
        startDate: '3/1/2024',
        endDate: '4/20/2024',
        description: 'Successfully implemented a feature that reduced application load time by 30%, significantly improving user satisfaction.'
    }
    ]
}