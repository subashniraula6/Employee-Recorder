import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/layout/HomePage/HomePage'
import AddEmployee from './components/layout/AddEmployeePage/AddEmployee'
import EditEmployee from './components/layout/EditEmployee/EditEmployee'
import TestPage from './TestPage'

function App() {
  return (
    <>
      <h1 className='header'>Employee Recorder</h1>
      <div className="App">
        <Switch>
          <Route exact path='/' component={TestPage} />
          <Route exact path='/employees' component={HomePage} />
          <Route path='/employees/add' component={AddEmployee} />
          <Route path='/employees/edit/:id' component={EditEmployee} />
        </Switch>
      </div>
    </>
  );
}

export default App;
