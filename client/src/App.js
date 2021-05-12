import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/layout/HomePage/HomePage'
import AddEmployee from './components/layout/AddEmployeePage/AddEmployee'
import EditEmployee from './components/layout/EditEmployee/EditEmployee'
import Landing from './components/layout/Landing Page/Landing'
import Candidates from './components/layout/CandidatesPage/Candidates'

function App() {
  return (
    <>
      <h1 className='header'>Employee Recorder</h1>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/employees' component={HomePage} />
          <Route path='/employees/add' component={AddEmployee} />
          <Route path='/employees/edit/:id' component={EditEmployee} />
          <Route path='/employees/candidates' component={Candidates} />
        </Switch>
      </div>
    </>
  );
}

export default App;
