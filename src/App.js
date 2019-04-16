import React, { Component } from "react";
// import Login from "../pages/Login";
import { BrowserRouter as Router,Route } from "react-router-dom";
//import {Buttons} from "@material-ui/core/Button"
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "./App.css"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import EmailVerification from "./pages/EmailVerfication";
// import PostList from "./components/PostList";
// import PostForm from "./components/PostForm";
// import LifecycleA from "./components/LifecycleA";
// import Form from "./components/Form";
// import Inline from "./comzponents/Inline";
// import Stylesheet from "./components/Stylesheet";
// import NameList from "./components/NameList";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import EventBind from "./components/EventBind";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import Welcome from "./components/Welcome";
// import Greet from "./components/Greet";
//import Message from "./components/Message";
//import Counter from "./components/Counter";


class App extends Component{
 render(){
     return(
        <Router>
         <div className="app">
           {/* <LifecycleA /> */}
           {/* <Form /> */}
           {/* <Inline /> */}
           {/* <Stylesheet primary={true} /> */}
           {/* <NameList /> */}
           {/* <Counter /> */}
           {/* <Message /> */}
           {/* <Welcome name ="Aayushi" heroName="spider-man"></Welcome> */}
           {/* <Greet name="swarna" heroName ="superman"></Greet> */}
           {/* <FunctionClick /> */}
           {/* <ClassClick /> */}
           {/* <EventBind /> */}
           {/* <ParentComponent /> */}
           {/* <UserGreeting /> */}
           {/* <PostList /> */}
           {/* <PostForm /> */}
           <Route path='/' exact component={Login}></Route>
           <Route path='/login' component={Login}></Route>
           <Route path='/register' component={Register}></Route>
           <Route path='/forgotpassword' component={ForgotPassword}></Route>
           <Route path='/passwordreset' component={PasswordReset}></Route>
           <Route path='/verifyemail/:email' component={EmailVerification}></Route>
           <Route path='/passwordreset/:token' component={PasswordReset}></Route>
         </div>
       </Router>

  );
}
}
export default App;

// import React, { Component } from 'react';

//     class App extends Component {
//       constructor() {
//         super();
//         this.state = {
//           count: 0,
//         }
//       }

//       makeIncrementer = amount => () =>
//         this.setState(prevState => ({
//           count: prevState.count + amount,
//         }));

//       increment = this.makeIncrementer(1);

//       render() {
//         return (
//           <div>
//             <p>Count: {this.state.count}</p>
//             <button className="increment" onClick={this.increment}>Increment count</button>
//           </div>
//         )
//       }
//     }

//     export default App;
