
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CustomerDashboard from './Pages/CustomerDashboard';
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route path="/" exact component={Login}></Route>
         <Route path="/dashboard" component={CustomerDashboard}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
