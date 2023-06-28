import './index.css'

const UserInputs = () => {
    return (
        <form>
            <label htmlFor="fName">First Name</label>
            <input id="fName" type = "text" placeholder='Enter your first name'></input>
            <label htmlFor="lName">Last Name</label>
            <input id="lName" type="text" placeholder='Enter your last name'></input>
            <label htmlFor="email">Email</label>
            <input id="email" type='email' placeholder='Enter your email'></input>
        </form>
    )
}

export default UserInputs