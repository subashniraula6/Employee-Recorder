import React, { useState, useEffect } from 'react'
import api from '../../../api/api'

const HomePage = () => {
    const [employee, setEmployee] = useState([]);

    const retrieveEmployees = async () => {
        const response = await api.get('/employees');
        if (response.data) console.log(response.data);
        return response.data;
    }

    useEffect(() => {
        const retrieveAllEmployees = async () => {
            const allEmployees = await retrieveEmployees();
            setEmployee(allEmployees);
        }
        retrieveAllEmployees();
    }, [])


    return (
        <div>
            Home page
        </div>
    )
}

export default HomePage
