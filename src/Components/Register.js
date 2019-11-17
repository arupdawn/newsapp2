import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import LogIn from './LogIn';

class Register extends React.Component {

  userData;
  udata;
  obj1;
  
  constructor(props){
      super(props);

      this.onChangePwd = this.onChangePwd.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          userArr: [],
          email:'',
          password:'',
          vidid:''
      }
  }
 
  //Form events
  onChangePwd(e){
        this.setState({
            password: e.target.value
        })
  }

  onChangeEmail(e){
    this.setState({
        email: e.target.value
    })
  }

  onSubmit(e){
    this.udata = JSON.parse(localStorage.getItem('user'));
    this.obj1 = {
        email: this.udata.email,
        password: this.udata.password
    }
    e.preventDefault();

    this.state.userArr.push(this.obj1);
   
    console.log(this.state.userArr[0].email);
    
  }

  //React LifeCycle

  componentDidMount(){
     this.userData = JSON.parse(localStorage.getItem('user'));

     if(localStorage.getItem('user')){
        this.setState({
            email: this.userData.email,
            password: this.userData.password,
            vidid: ''
        })
     } else{
        this.setState({
            email: '',
            password: '',
            vidid: ''
        })
     }
  }

  componentWillUpdate(nextProps,nextState){
     localStorage.setItem('user',JSON.stringify(nextState));
  }



  render() {

        return (
            <div  className="backgroundL">

                <br></br><br></br> 

                <form className="modal-content animate" onSubmit={this.onSubmit}>

                    <div className="container">
                    <h3>RegisterPage</h3><br></br>
                    <label for="uname"><b>Email_Id</b></label><br></br>
                    <input type="text" placeholder="Enter EmailId/Username" name="username" value={this.state.email} onChange={this.onChangeEmail} required /><br></br>

                    <label for="psw"><b>Password</b></label><br></br>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChangePwd} required /><br></br>
                    <br></br>

                    <Link to="/login">
                    <button type="submit" value="Submit">Submit</button><br></br>
                    </Link>
                    <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>

                    </div>

                    <div className="container">
                    <Link to="/">
                    <button type="button" className="cancelbtn">{' '}Login{' '}</button>
                    </Link>
                    </div><br></br>
                </form>

                <br></br><br></br>
                
            </div>
          ); 
  }
}

export default Register;