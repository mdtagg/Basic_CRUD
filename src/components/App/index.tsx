
import './index.css'
import UserInputs from '../UserInputs'
import UserList from '../UserList'
import { useState } from 'react'

function App() {

  const [ users, setUsers ] = useState<any[]>([])
  // const [ firstName,setFirstName ] = useState('')
  //   const [ lastName,setLastName ] = useState('')
  //   const [ email,setEmail ] = useState('')

  console.log(users)

  return (
    <>
      <h1>CRUD Application</h1>
      <UserInputs
        // firstName={firstName}
        // setFirstName={setFirstName}
        // lastName={lastName}
        // setLastName={setLastName}
        // email={email}
        // setEmail={setEmail}
        setUsers={setUsers}
      />
      <UserList
        // firstName={firstName}
        // setFirstName={setFirstName}
        // lastName={lastName}
        // setLastName={setLastName}
        // email={email}
        // setEmail={setEmail}
        users={users}
        setUsers={setUsers}
      />
    </>
  )
}

export default App
