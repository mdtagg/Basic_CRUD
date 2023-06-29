import './index.css'
import { useState } from 'react'
// import { handleChange } from '../App/utils/handleInputChange'

interface UserInputsProps {
    // firstName:string 
    // setFirstName:React.Dispatch<React.SetStateAction<string>>
    // lastName:string 
    // setLastName:React.Dispatch<React.SetStateAction<string>>
    // email:string 
    // setEmail:React.Dispatch<React.SetStateAction<string>>
    setUsers:React.Dispatch<React.SetStateAction<any[]>>
}

const UserInputs = (props:UserInputsProps) => {

    const { setUsers } = props

    const [ firstName,setFirstName ] = useState('')
    const [ lastName,setLastName ] = useState('')
    const [ email,setEmail ] = useState('')

    // console.log(firstName,lastName,email)

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
                {firstName,lastName,email}
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
                type='submit'
            >Submit</button>
        </form>
    )
}

export default UserInputs