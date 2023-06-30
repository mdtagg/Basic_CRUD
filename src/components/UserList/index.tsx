
import './index.css'
import { useState,useEffect,useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface filteredUser {
    edit:boolean 
    email:string 
    firstName:string 
    id:string 
    lastName:string
}

interface test {
    filteredUser:filteredUser
    id:string
}

interface UserListProps {
    users: any[]
    setUsers: React.Dispatch<React.SetStateAction<any[]>>
}

const UserList = (props:UserListProps) => {

    const { users,setUsers } = props

    const [ currentInput,setCurrentInput ] = useState<null  | React.MutableRefObject<HTMLInputElement | null>>(null)

    // const [ original,setOriginal ] = useState<null | test>(null)
    // console.log({original})

    const [ filteredUser,setFilteredUser ] = useState<any>(null)
    console.log({filteredUser})

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)

    const handleEdit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('edit fired')
        const { id } = e.target as HTMLButtonElement

        //const filteredUser = user.filter(user => user.id === id)
        const filteredUser = users.map(user => {
            if(user.id === id) {
                return user
            }
        })[0]

        console.log(filteredUser)

        // setOriginal({filteredUser,id})
        setFilteredUser(filteredUser)
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

        name === 'first name' ? setCurrentInput(firstNameRef) :
        name === 'last name' ? setCurrentInput(lastNameRef) :
        setCurrentInput(emailRef)

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

    // const handleCancel = () => {
    //     setUsers(users.map(user => {
    //         // console.log(original)
    //         if(original.id === user.id) {
                
    //             user = filteredUser
    //         }
    //         user.edit = false
    //         return user
    //     }))
    //     setCurrentInput(null)
    //     // setOriginal(null)
    // }

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
    }

    const handleInputClick = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        
        // const target = e.target as HTMLInputElement
        // testRef.current = target
        // // testRef.current.focus()
        // // console.log(testRef.current)
        // setCurrentInput(testRef)
    }

    // useEffect(() => {
    //     if(!currentInput) return 
    //     const currentInputElement = currentInput.current as HTMLInputElement
    //     currentInputElement.focus()
        
    // },[users])

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
                                        onClick={handleEdit}
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
                                        ref={firstNameRef}
                                        onClick={(e) => handleInputClick(e)}
                                    ></input>
                                </td>

                                <td>
                                    <input 
                                        name="last name"
                                        value={user.lastName}
                                        onChange={handleChange}
                                        ref={lastNameRef}
                                        data-id={user.id}
                                        onClick={(e) => handleInputClick(e)}

                                    ></input>
                                </td>

                                <td>
                                    <input 
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        ref={emailRef}
                                        data-id={user.id}
                                        onClick={(e) => handleInputClick(e)}

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
                                        // onClick={handleCancel}
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