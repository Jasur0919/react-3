import React, { useState } from 'react'
import './Header.css'

const Form = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [data, setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            name,
            age: +age
        }
        // console.log(user);

        setData([...data, user])
        localStorage.setItem('user', name, age)
        setName("")
        setAge("")

    }

    let users = data?.map((u, inx) => (
    <div key={inx}>
        <h3>{u.name}</h3>
        <p>{u.age}</p>
       
    </div>))


  return (
    <div>
      <h2>From</h2>
     <div className="form">
     <form onSubmit = {handleSubmit}>
        <input
        required  
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder='nmae'
        />
        <input 
        required
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder='age'
        />

        <button>Submit</button>
       
        </form>

     </div>
        <div className="d">
            {users}
        </div>
        
    </div>
  )
}

export default Form
