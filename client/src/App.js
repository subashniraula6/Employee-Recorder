import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/layout/HomePage/HomePage'
import AddEmployee from './components/layout/AddEmployeePage/AddEmployee'
import EditEmployee from './components/layout/EditEmployee/EditEmployee'

function App() {
  return (
    <>
      <h1 class='header'>Employee Recorder</h1>
      <div className="App">
        <Switch>
          <Route exact path='/employees' component={HomePage} />
          <Route path='/add-employee' component={AddEmployee} />
          <Route path='/edit-employee' component={EditEmployee} />
        </Switch>
      </div>
    </>
  );
}

export default App;
