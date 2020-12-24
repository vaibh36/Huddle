import './App.css';
import Posts from './containers/Posts/Posts';
import Users from './containers/Users/Users';
import Search from './containers/Search/Search';
import Comments from './containers/Comments/Comments';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Link to="/posts">Posts</Link>
      <Link to="/search">Search</Link>
      </div>
        <Switch>
        <Route exact path="/user/:id" component={Users} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id/comments" component={Comments} />
        <Route exact path="/" />
          </Switch>
    </div>
    </Router>
  );
}

export default App;
