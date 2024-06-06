import React, { useEffect, useState } from 'react'
import ThreeComponent from '../SubComponents/ThreeComponent';

function Playground() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({ firstname: '', lastname: '', email: '' });
    const [count, setCount] = useState(0);

    const handleCounter = () => {
        setCount((prevCount) => prevCount+1);
    };

    const handleUser = () => {
        setUsers([...users, {
            "firstname": currentUser.firstname,
            "lastname": currentUser.lastname,
            "email": currentUser.email
        }])
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setCurrentUser({...currentUser, 
            [name]: value,
        });
    }

    useEffect(() => {
        console.log('Playground')
        document.title = count
    }, [count]);


    return (
        <div>
            <ThreeComponent />
            <div>This Playground</div>
            <div className='user-obj'>
                <label>Firstname</label>
                <input onChange={changeHandler} name="firstname" value={users.firstname} type='text' />
                <label>Lastname</label>
                <input onChange={changeHandler} name="lastname" value={users.lastname} type='text'/>
                <label>Email</label>
                <input onChange={changeHandler} name="email" value={users.email} type='email'/>
                <button onClick={handleUser}>Submit</button>
            </div>
            <div>
                Number of click: {count}
                <button onClick={handleCounter}>Counter</button>
            </div>
            <div>
                {users.firstname}
            </div>
            <div>
                {
                    users && users.map((user, i) => {
                        return(
                            <div key={i}>
                                <span>{user.firstname}</span><br />
                                <span>{user.lastname}</span><br />
                                <span>{user.email}</span><br /><br />
                            </div>
                        )
                    })
                }
            </div>
            {/* <ThreeComponent /> */}
        </div>
    )
}

export default Playground