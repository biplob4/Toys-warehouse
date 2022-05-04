import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://morning-headland-26668.herokuapp.com/login', { email });
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])
    return [token]
};

export default UseToken;