import { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';

const UseAuth = () => {
    const all = useContext(AuthContex)
    return all

};


export default UseAuth;