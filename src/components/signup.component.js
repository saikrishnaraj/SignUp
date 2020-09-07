import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Facebook from './facebook.component'

export default class Signup extends Component {
    constructor(props){
        super(props);
        
        
        const token = localStorage.getItem("tokenUser");
        let loggedIn = true
        if(token == null ){
            loggedIn = false 
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            firstname : '',
            lastname : '',
            password : '',
            email : '',
            result:'',
            loggedIn,
        }
    }
    
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    

   async onSubmit(e){
        e.preventDefault();

        const user ={
            firstname : this.state.firstname,
            password : this.state.password,
            email : this.state.email,
            lastname : this.state.lastname
        }
        let x = await axios.post('https://reqres.in/api/users', user)
        if(x.status == 201){
            this.setState({
                result : 'You have succesfully registered'
            });
        }
        else if (x.status === 400){
            this.setState({
                result : 'Server Error'
            });
        }

       
    }

  render() {
      if(this.state.loggedIn === true ){
          return(
            <div>
                <Facebook/>
            </div>
          );
      }
    return (
      <div >
          <br>
          </br>
          <br></br>
          <br>
          </br>
          <br>
          </br>
      <table className ="tableclass">
          <tbody >
              <tr>
                  <td colspan='2'>
                      <b className="smallfont">SIGN UP</b>
                  </td>
              </tr>
              <tr>
                  <td colspan='2'>
                  <div>
                      <div className="bigfont"> 
                          Create your account
                      </div>
                      <div className="smallfont">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>
                  </div>
                  </td>
                  </tr>
                  <tr>
                      
                          <td>
                      <Facebook />
                      </td>
                        <td>
                      <button className="buttonclass">
                        Sign up with Google
                      </button>
                  
                  </td>
              </tr>
              <tr>
                  <td colspan='2'>
                      <div className="smallfont">
                      OR
                      </div>
                  </td>
              </tr>
              <tr>
                  <td colspan='2'>
                  <form onSubmit={this.onSubmit}>
                      <div  className="formgroup">
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name" required/>
                      </div>
                      <div className="formgroup">
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" required/>
                      </div>
                      <div className="formgroup">
                        <input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email Address" required/>
                      </div>
                      <div className="formgroup">
                        <input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="password" required/>
    
                      </div>

                      <div className="smallfont">
                          By clicking on Sign Up, you agree to our <a className="links" href="/">Terms of Use</a> and our <a className="links" href="/">Privacy Policy</a>
                      </div>
                      <div  >
                          <input type="submit" className="signinbutbutton"  value="Sign Up" />
                      </div>
                      <div>
                          {this.state.result}
                      </div>
                  </form>
                  </td>
              </tr>
          </tbody>
          </table>
          </div>
      
    );
  }
}