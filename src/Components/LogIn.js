import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Register from './Register';

class LogIn extends React.Component { 
    adata;
    robj;
  
  constructor(props){
      super(props);
        this.state = {
            adata:'',
            logins: false,
            err: ''
        };
      }

      
  

  login(e){
      e.preventDefault();
      var username = e.target.elements.username.value;
      var password = e.target.elements.password.value;
      if(username === this.state.adata.email && password === this.state.adata.password){
        this.props.history.push('/videolist/')
        this.setState({
            logins: true
        });
      }else {
        this.setState({
            err: 'Invalid Username or Password'
        });
      }
      
  }

  render() {
    this.state.adata = JSON.parse(localStorage.getItem('user'));
    
    console.log(this.state.adata);
   
            return (
                <div className="backgroundL">
                   <br></br><br></br> 

                    <form className="modal-content animate" method="post" onSubmit={this.login.bind(this)}>
                    
                        <div className="container">
                        <h3>LoginPage</h3><br></br>
                        <label for="uname"><b>Username</b></label><br></br>
                        <input type="text" placeholder="Enter Username" name="username" required /><br></br>

                        <label for="psw"><b>Password</b></label><br></br>
                        <input type="password" placeholder="Enter Password" name="password" required /><br></br>
                        
                        {this.state.err !='' ? this.state.err : ''}<br></br>
                        
                        <button type="submit">Login</button><br></br>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label><br></br><br></br>

                        <label>
                             Not a user ??, register below
                        </label><br></br>

                        <Link to="/register">
                        <button type="button" className="cancelbtn">Register</button>
                        </Link>
                        </div><br></br>
                    </form>

                    <br></br><br></br>
                </div>
            );
    }
    
  }

export default LogIn;