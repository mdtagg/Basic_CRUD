
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

    const testRef = useRef(null)
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
        const { id } = e.target.dataset

        // name === 'first name' ? setCurrentInput(firstNameRef) :
        // name === 'last name' ? setCurrentInput(lastNameRef) :
        // setCurrentInput(emailRef)

        // name === 'first name' ? testRef.current = 

        setUsers(users.map(user => {
            if(user.id === id && name === 'first name') {
                user.firstName = value
            }else if(user.id === id && name === 'last name') {
                user.lastName = value
            }else if(user.id === id && name === 'email') {
                user.email = value
            }
            return user
        }))
    }

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement
        const { id } = target.dataset
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
    }

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement
        const { id } = target.dataset
        setUsers(users.map(user => {
            if(user.id === id) {
                user.edit = false
            }
            return user
        }))
        // setCurrentInput(null)
    }

    const handleCancel = () => {

    }

    const handleInputClick = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        
        const target = e.target as HTMLInputElement
        testRef.current = target
        setCurrentInput(testRef)
    }

    useEffect(() => {
        console.log(currentInput)
        if(!currentInput) return 
        // currentInput.current.focus()
        // if(!testRef.current) return 
        // console.log(testRef.current)
        // console.log({firstNameRef})
    },[users])

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
                                    <button 
                                        className="delete-button"
                                        onClick={handleDelete}
                                        data-id={user.id}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </> :
                            <>
                                <td>
                                    <input 
                                        name="first name" 
                                        value={user.firstName} 
                                        onChange={handleChange}
                                        data-id={user.id}
                                        // ref={firstNameRef}
                                        onClick={(e) => handleInputClick(e)}
                                    ></input>
                                </td>

                                <td>
                                    <input 
                                        name="last name"
                                        value={user.lastName}
                                        onChange={handleChange}
                                        // onBlur={handleFocusOut}
                                        // ref={lastNameRef}
                                        data-id={user.id}
                                    ></input>
                                </td>

                                <td>
                                    <input 
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        // ref={emailRef}
                                        data-id={user.id}
                                    ></input>
                                </td>

                                <td>
                                    <button 
                                        className="user-submit"
                                        onClick={(e) => handleSubmit(e)}
                                        data-id={user.id}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="user-cancel"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </button>
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