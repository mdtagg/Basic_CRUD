
import './index.css'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface UserListProps {
    // firstName:string
    // setFirstName:React.Dispatch<React.SetStateAction<string>>
    // lastName:string 
    // setLastName:React.Dispatch<React.SetStateAction<string>>
    // email:string 
    // setEmail:React.Dispatch<React.SetStateAction<string>>
    users: any[]
    setUsers: React.Dispatch<React.SetStateAction<any[]>>
}

const UserList = (props:UserListProps) => {

    const { users,setUsers } = props

    const [ edit, setEdit ] = useState(false)

    const handleEdit = () => {
        setEdit(true)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target

        switch(name) {
            case 'first name':
                
                console.log(users)
                break
            case 'last name':
                // setLastName(value)
                break 
            case 'email':
                // setEmail(value)
                break
        }
    }

    // useEffect(() => {
    //     if(!edit) return; 
    //     setEdit(false)

    // },[edit])

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
                            {!edit &&
                            <>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            </>
                            }
                            {edit &&
                            <>
                            <td><input name="first name" placeholder={user.firstName} value={user.firstName} onChange={handleChange}></input></td>
                            <td><input placeholder={user.lastName} value={user.lastName}></input></td>
                            <td><input placeholder={user.email} value={user.email}></input></td>
                            </>
                            }
                            <td>
                                <button 
                                    className="edit-button"
                                    onClick={handleEdit}
                                >
                                    Edit
                                </button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

export default UserList