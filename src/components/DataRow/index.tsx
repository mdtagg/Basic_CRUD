
import { UserType } from "../UserList"
import { OriginalType } from "../UserList"

interface DataRowProps {
    users:any[]
    user:UserType
    setUsers:React.Dispatch<React.SetStateAction<any[]>>
    original:OriginalType | null
    setOriginal: React.Dispatch<React.SetStateAction<OriginalType | null>>
}

const DataRow = (props:DataRowProps) => {

    const { users,setUsers,original,user,setOriginal } = props

    const handleEdit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const { id } = e.target as HTMLButtonElement

        if(original) {
           setUsers(users.map(user => {
            if(user.edit) {
                user.edit = false
            }
            return user
           }))
        }
        
        const findUser = users.find(user => user.id === id)
        const filteredUser = { ...findUser }
      
        setOriginal({filteredUser,id})
        setUsers(users.map(user => {
            if(user.id === id) {
                user.edit = true
            }
            return user
        }))
    }

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = e.target as HTMLButtonElement
        const { id } = target.dataset
        let testArr:any[] = []
        users.forEach(user => {
            if(user.id !== id) {
                testArr.push(user)
            }
        })
        console.log(testArr)
        const filteredUsers = users.filter(user => user.id !== id)
        setUsers(filteredUsers)
    }

    return (
        <>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td className="action-buttons">
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
        </>
    )
}

export default DataRow