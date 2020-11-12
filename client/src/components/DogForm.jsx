const DogForm = props => {

    const { form, errors, handleInputChange, handleSubmit, submitValue } = props;

    return (

        <form onSubmit={ handleSubmit } className="col-6 mx-auto">
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={ form.name }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.name ? errors.name.message : "" }</span>
            </div>

            <div className="form-group">
                <label>Breed:</label>
                <input 
                    type="text" 
                    name="breed" 
                    value={ form.breed }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.breed ? errors.breed.message : "" }</span>
            </div>

            <div className="form-group">
                <label>Age:</label>
                <input 
                    type="number" 
                    name="age" 
                    value={ form.age }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.age ? errors.age.message : "" }</span>
            </div>

            <div className="form-group">
                <label>Favorite Move:</label>
                <input 
                    type="text" 
                    name="favMove" 
                    value={ form.favMove }
                    className="form-control"
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <label>Is Lit?</label>
                <input 
                    type="checkbox" 
                    name="isLit" 
                    checked={ form.isLit }
                    value={ form.isLit }
                    className="form-control"
                    onChange={ handleInputChange }
                />
            </div>

            <input type="submit" className="btn btn-primary" value={ submitValue }/>

        </form>
    )
}

export default DogForm;