import './App.css';
import SignInPage from './pages/signin'
import HomePage from './pages/home'
import ErrorBoundary from './pages/errorBoundary'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App({...props}) {
  return (
    <div className="App">
    
      <Router>
        <Switch>
        <ErrorBoundary key={props.location?.pathname}>
          <Route path="/signin" render={() => (             
                  <SignInPage />
              )}>
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/" exact>
            <SignInPage />
          </Route>
          </ErrorBoundary>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
