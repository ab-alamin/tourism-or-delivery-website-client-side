
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Services from './components/Home/Services/Services';
import Errorfile from './components/Errorfile/Errorfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Information from './components/Information/Information';
import AddService from './components/AddService/AddService';
import ManageServices from './components/ManageServices/ManageServices';
import Hotels from './components/Home/Hotels/Hotels';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          {/* <Route path="/about">
            <About></About>
          </Route> */}
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/doctors">
            <Hotels></Hotels>
          </Route>
          <PrivateRoute path="/information/:serviceId">
            <Information></Information>
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path="*">
            <Errorfile></Errorfile>
          </Route>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
  
    </div>
  );
}

export default App;
