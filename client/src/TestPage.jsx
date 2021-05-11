import React from 'react'
import {createStructuredSelector} from 'reselect'
import {employeesSelector} from './redux/selectors/employeeSelector'
import {connect} from 'react-redux'

const TestPage = ({employees}) => {
    console.log(employees)
    return (
        <div>
            TestPage
        </div>
    )
}
export const mapStateToProps = createStructuredSelector({
    employees: employeesSelector
})

export default connect(mapStateToProps, null)(TestPage)
