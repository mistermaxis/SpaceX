import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rockets from './components/rockets';
import Missions from './components/missions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Rockets />
          </Route>
          <Route path="/missions" >
            <Missions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
