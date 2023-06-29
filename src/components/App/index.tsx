
import './index.css'
import UserInputs from '../UserInputs'
import UserList from '../UserList'
import { useState } from 'react'

function App() {

  const [ users,setUsers ] = useState<any[]>([])

  console.log(users)

  return (
    <>
      <h1>CRUD Application</h1>
      <UserInputs
        setUsers={setUsers}
      />
      <UserList
        users={users}
      />
    </>
  )
}

export default App
