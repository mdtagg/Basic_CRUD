import './index.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface UserInputsProps {
    setUsers:React.Dispatch<React.SetStateAction<any[]>>
}

const UserInputs = (props:UserInputsProps) => {

    const { setUsers } = props

    const [ firstName,setFirstName ] = useState('')
    const [ lastName,setLastName ] = useState('')
    const [ email,setEmail ] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        switch(name) {
            case 'first name':
                setFirstName(value)
                break
            case 'last name':
                setLastName(value)
                break 
            case 'email':
                setEmail(value)
                break
        }
    }

    const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUsers((prev) => {
            return [
                ...prev,
                {
                    firstName,
                    lastName,
                    email,
                    edit:false,
                    id:uuidv4()
                }
            ]
        })
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <form 
            onSubmit={(e) => handleOnSubmit(e)}
        >
            <label htmlFor="fName">First Name</label>
            <input 
                id="fName" 
                type="text" 
                placeholder='Enter your first name'
                name="first name"
                value={firstName}
                onChange={(e) => handleChange(e)}
            ></input>

            <label htmlFor="lName">Last Name</label>
            <input 
                id="lName" 
                type="text" 
                placeholder='Enter your last name'
                name="last name"
                value={lastName}
                onChange={(e) => handleChange(e)}

            ></input>

            <label htmlFor="email">Email</label>
            <input 
                id="email" 
                type='email' 
                placeholder='Enter your email'
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}

            ></input>

            <button
                className="submit-button"
                type='submit'
            >
                Submit
            </button>
        </form>
    )
}

export default UserInputs