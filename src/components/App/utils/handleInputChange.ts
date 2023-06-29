
export const handleChange = (e:React.ChangeEvent<HTMLInputElement>,setState:React.Dispatch<React.SetStateAction<string>>) => {
    const { value, name } = e.target
    switch(name) {
        case 'first name':
            setState(value)
            break
        case 'last name':
            setState(value)
            break 
        case 'email':
            setState(value)
            break
    }
}