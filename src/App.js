
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Pages/home/Home'
// import { Routes, Route } from "react-router-dom";
import UserList from './components/Pages/userList/UserList';
import User from './components/Pages/user/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewUser from './components/Pages/newPageUser/newUser/NewUser';
import ProductList from './components/Pages/productList/ProductList';

function App() {

  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userID">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/product">
            <ProductList />
          </Route>
          <Route path="/product/:productID">
            <ProductList />
          </Route>
          <Route path="/product/newProduct">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
