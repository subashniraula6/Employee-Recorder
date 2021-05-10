import React, { useState, useEffect } from 'react'
import api from '../../../api/api'
import EmployeeCard from '../../EmployeeCard/EmployeeCard';
import {
    HomepageContainer
} from './HomePage.styles'

const HomePage = () => {
    const [employees, setEmployees] = useState([]);

    const retrieveEmployees = async () => {
        const response = await api.get('/employees');
        if (response.data) console.log(response.data);
        return response.data;
    }

    useEffect(() => {
        const retrieveAllEmployees = async () => {
            const allEmployees = await retrieveEmployees();
            setEmployees(allEmployees);
        }
        retrieveAllEmployees();
    }, [])


    return (
        <HomepageContainer>
            {
                employees.map((employee) =>
                    <EmployeeCard key={employee.id} {...employee} />)
            }
        </HomepageContainer>
    )
}

export default HomePage
