import React, { useState } from 'react'

function Form({ setLocationState }) {
    const [typeLocation, setTypeLocation] = useState('')
    function handleSubmit (e){
        e.preventDefault()
        setLocationState(typeLocation)
        setTypeLocation('')

    }
    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label className="city">City:
                    <input type="text" value={typeLocation} onChange={(e) => setTypeLocation(e.target.value)} />
                </label>
                <button
                    className="btn btn-primary"
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}


export default Form;