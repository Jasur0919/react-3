import React, { useState } from 'react'
import './Header.css'

const Header = () => {
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
    <div key={inx} className='hero'>
        <h3>{u.name}</h3>
        <h3>{u.age}</h3>
       
    </div>))


  return (
    <div>
      {/* <h2>From</h2> */}
     <div className="container">
     <div className="form">
     <form onSubmit = {handleSubmit}>
        <div className="logo_box_input">
        <input className='logo_input'
        required  
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder='Name'
        />
        <input className='logo_input show'
        required
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder='Age'
        />
        </div>

        <button>Submit</button>
       
        </form>

     </div>
     </div>
      <div className="container">
      <div className="setName">
            {users}
        </div>
      </div>
        
    </div>
  )
}

export default Header
