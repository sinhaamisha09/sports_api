import React from 'react';
import { Switch , Route , Redirect} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import SportsPage from './pages/sportsPage/sportspage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css';

class App extends React.Component {
	  render() {
	    return (
	      <div className="App">
			<Header />
	         <Switch>
	           <Route exact path='/' component={HomePage}/>
	           <Route exact path='/' component={SportsPage}/>
	           <Route 
	            exact 
	            path='/signIn'
	            render={() => 
	            this.props.currentUser ? (
	              <Redirect to='/' />
	              ) : (
	              <SignInAndSignUpPage />
	              )
	            }
	          />
	         </Switch>   
	      </div>
	    );
  }
}

export default App;
