import uuid from 'react-uuid';


export const emptyCv ={
    personal:{
        firstName: '',
        lastName: '',
        jobTitle:'',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: ''
    },
    education:{
        degree: '',
        university: '',
        startYear: '',
        endYear: ''
    },
    experience:[
        {
        id: uuid(),
        company: '',
        address:'',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    }
    ]
}