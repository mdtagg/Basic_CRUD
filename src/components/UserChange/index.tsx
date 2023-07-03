import { useEffect } from 'react'
import { UserType } from '../UserList'
import { OriginalType } from '../UserList'

interface UserChangeProps {
    users:any[]
    setUsers:React.Dispatch<React.SetStateAction<any[]>>
    user:UserType 
    original:OriginalType | null
    setOriginal:React.Dispatch<React.SetStateAction<OriginalType | null>>
    firstNameRef:React.MutableRefObject<null>
    lastNameRef:React.MutableRefObject<null>
    emailRef:React.MutableRefObject<null>
    currentInput:React.MutableRefObject<HTMLInputElement | null> | null
    setCurrentInput:React.Dispatch<React.SetStateAction<React.MutableRefObject<HTMLInputElement | null> | null>>
}

const UserChange = (props:UserChangeProps) => {

    const { users,setUsers,user,original,setOriginal,firstNameRef,lastNameRef,emailRef,currentInput,setCurrentInput } = props

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        const { id } = e.target.dataset

        name === 'first name' ? setCurrentInput(firstNameRef) :
        name === 'last name' ? setCurrentInput(lastNameRef) :
        setCurrentInput(emailRef)

        setUsers(users.map(user => {
          
            if(user.id === id) {
                switch(name) {
                    case 'first name':
                        user.firstName = value
                        break 
                    case 'last name': 
                        user.lastName = value 
                        break 
                    case 'email': 
                        user.email = value 
                        break
                }
            }
            return user
        }))
    }

    const handleCancel = () => {
        setUsers(users.map(user => {
            if(user.id === original!.id) {
                return original!.filteredUser
            }
            return user
        }))
        setCurrentInput(null)
        setOriginal(null)
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
        setCurrentInput(null)
        setOriginal(null)
    }

    useEffect(() => {
        if(!currentInput) return 
        const currentInputElement = currentInput.current as HTMLInputElement
        currentInputElement.focus()
    },[users])

    return (
        <>
            <td>
                <input 
                    name="first name" 
                    value={user.firstName} 
                    onChange={handleChange}
                    data-id={user.id}
                    ref={firstNameRef}
                ></input>
            </td>

            <td>
                <input 
                    name="last name"
                    value={user.lastName}
                    onChange={handleChange}
                    ref={lastNameRef}
                    data-id={user.id}
                ></input>
            </td>

            <td>
                <input 
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    ref={emailRef}
                    data-id={user.id}
                ></input>
            </td>

            <td className="action-buttons">
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
    )
}

export default UserChange