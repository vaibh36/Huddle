import React from 'react';

const Search = () => {

    const [message, setMessage] = React.useState('Please enter the userid');
    const [id, setId] = React.useState('');
    const [user, setUser] = React.useState({});
    const [err, setErr] = React.useState('');

    const findUser = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
            const json = await response.json();
            setUser(json);
            setErr('');
            setMessage('')
        } catch (err) {
            setUser({});
            setErr('User not available');
            setMessage('')
        }

    }

    const onChangeHandler = (event) => {
        setId(event.target.value);
    }

    return (
        <div>
            <div>
                <input value={id} onChange={(event) => onChangeHandler(event)} />
                <button onClick={findUser}>Find User</button>
            </div>
            <p>{message}</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px' }}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>{user.username}</p>
            </div>
        </div>
    )

}

export default Search;