
import './index.css'
import UserData from '../UserData'
import UserChange from '../UserChange'
import { useState,useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface UserType {
    edit:boolean 
    email:string 
    firstName:string 
    id:string 
    lastName:string
}

export interface OriginalType {
    filteredUser:UserType
    id:string
}

interface UserListProps {
    users: any[]
    setUsers: React.Dispatch<React.SetStateAction<any[]>>
}

const UserList = (props:UserListProps) => {

    const { users, setUsers } = props

    const [ original,setOriginal ] = useState<null | OriginalType>(null)
    const [ currentInput,setCurrentInput ] = useState<null  | React.MutableRefObject<HTMLInputElement | null>>(null)

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)

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
                        <tr 
                            key={uuidv4()} 
                            id={uuidv4()}
                        >
                            {!user.edit ? 
                                <UserData
                                    users={users}
                                    user={user}
                                    setUsers={setUsers}
                                    original={original}
                                    setOriginal={setOriginal}
                                />
                                :
                                <UserChange
                                    users={users}
                                    setUsers={setUsers}
                                    user={user}
                                    original={original}
                                    setOriginal={setOriginal}
                                    firstNameRef={firstNameRef}
                                    lastNameRef={lastNameRef}
                                    emailRef={emailRef}
                                    currentInput={currentInput}
                                    setCurrentInput={setCurrentInput}
                                />
                            }
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default UserList