
import './index.css'
import { useState,useEffect,useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface UserListProps {
    users: any[]
    setUsers: React.Dispatch<React.SetStateAction<any[]>>
}

const UserList = (props:UserListProps) => {

    const { users,setUsers } = props

    const [ currentInput,setCurrentInput ] = useState<null  | React.MutableRefObject<null>>(null)
    const [ userFirstName,setUserFirstName ] = useState('')
    const [ userLastName,setUserLastName ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)

    const handleEdit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { id } = e.target as HTMLButtonElement
        setUsers(users.map(user => {
            if(user.id === id) {
                user.edit = true
            }
            return user
        }))
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        switch(name) {
            case 'first name':
                setUserFirstName(value)
                setCurrentInput(firstNameRef)
                break
            case 'last name':
                setUserLastName(value)
                setCurrentInput(lastNameRef)
                break
            case 'email':
                setUserEmail(value)
                setCurrentInput(emailRef)
        }
    }

    useEffect(() => {
        if(!currentInput) return 
        const currentInputElement = currentInput.current as unknown as HTMLInputElement
        console.log(currentInputElement)
        currentInputElement.focus()
    },[userFirstName,userLastName,userEmail])

    return (
        <table>
            <thead>
                <tr className="table-head">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <tr key={uuidv4()} id={uuidv4()}>
                            {!user.edit ? 
                            <>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button 
                                        className="edit-button"
                                        onClick={(e) => handleEdit(e)}
                                        id={user.id}
                                    >
                                        Edit
                                    </button>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </> :
                            <>
                                <td>
                                    <input 
                                        name="first name" 
                                        placeholder={user.firstName} 
                                        value={userFirstName === '' ? user.firstName : userFirstName} 
                                        onChange={handleChange}
                                        data-id={user.id}
                                        ref={firstNameRef}
                                    ></input>
                                </td>

                                <td>
                                    <input 
                                        name="last name"
                                        placeholder={user.lastName} 
                                        value={userLastName === '' ? user.lastName : userLastName}
                                        onChange={handleChange}
                                        ref={lastNameRef}
                                    ></input>
                                </td>

                                <td>
                                    <input 
                                        name="email"
                                        placeholder={user.email} 
                                        value={userEmail === '' ? user.email : userEmail}
                                        onChange={handleChange}
                                        ref={emailRef}
                                    ></input>
                                </td>

                                <td>
                                    <button className="submit-button">Submit</button>
                                    <button>Cancel</button>
                                </td>
                                
                            </>
                            }
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

export default UserList

   // firstName:string
    // setFirstName:React.Dispatch<React.SetStateAction<string>>
    // lastName:string 
    // setLastName:React.Dispatch<React.SetStateAction<string>>
    // email:string 
    // setEmail:React.Dispatch<React.SetStateAction<string>>

{/* {edit &&
                            <>
                            <td><input name="first name" placeholder={user.firstName} value={user.firstName} onChange={handleChange}></input></td>
                            <td><input placeholder={user.lastName} value={user.lastName}></input></td>
                            <td><input placeholder={user.email} value={user.email}></input></td>
                            </>
                            } */}


{/* <td>
                            {!user.edit ? 
                                user.firstName : 
                                <input 
                                    name="first name" 
                                    placeholder={user.firstName} 
                                    value={user.firstName} 
                                    onChange={handleChange}
                                ></input>
                            }
                            </td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button 
                                    className="edit-button"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </button>
                                <button className="delete-button">Delete</button>
                            </td> */}