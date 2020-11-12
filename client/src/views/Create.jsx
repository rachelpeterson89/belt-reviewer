import axios from 'axios';
import { useState } from 'react';
import { navigate } from '@reach/router';
import DogForm from '../components/DogForm';

const Create = props => {

    const initialState = {
        name:"",
        breed:"",
        age:0,
        favMove:"",
        isLit:false
    }

    const [ dogForm, setDogForm ] = useState(initialState);

    const [ errors, setErrors ] = useState({
        name:"",
        breed:"",
        age:""
    })

    const handleInputChange = e => {
        if(e.target.type === "checkbox") {
            setDogForm({
                ...dogForm,
                isLit: !dogForm.isLit
            })
        }
        setDogForm({
            ...dogForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/dogs/create', dogForm)
            .then(res => {
                if(res.data.results) {
                    // setDogForm(initialState)
                    navigate('/')
                } else {
                    setErrors(res.data);
                }
            })   
    }

    return(
        <div>
            <h2 className="text-center">Add a Dog to the Disco</h2>
            <DogForm
                form={ dogForm }
                handleInputChange={ handleInputChange }
                handleSubmit={ handleSubmit }
                errors={ errors }
                submitValue="Add A Dog"
            />
        </div>
    );
}

export default Create;