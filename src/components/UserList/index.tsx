
import './index.css'

interface UserListProps {
    users: any[]
}

const UserList = (props:UserListProps) => {

    const { users } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <tr>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

export default UserList