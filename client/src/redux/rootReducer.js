import {combineReducers} from 'redux'
import {employeeReducer} from './employeeReducer'

export const rootReducer = combineReducers({
    employee: employeeReducer
})
