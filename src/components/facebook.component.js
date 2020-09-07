import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login'
import '../scss/myscss.scss'

export default class Facebook extends Component {
    constructor(props){
        super(props);
        
        

       
        this.state = {
            isLoggedIn : false,
            name : '',
            password : '',
            email : '',
            result:'',
        }
    }
    onSubmit = this.onSubmit.bind(this)

    
    componentClicked = () => console.log("clicked");
    responseFacebook = async response => {
        if(response.name != null){
        localStorage.setItem("tokenUser",this.state.email)
        
        //console.log(response)
        this.setState({
            isLoggedIn : true,
            name : response.name,
            email : response.email
        });
         const user ={
            name : this.state.name,
            email : this.state.email,
        }
        let x = await axios.post('https://reqres.in/api/users', user)
        if(x.status === 201){

        }
    }
    }

    async onSubmit(e){
        e.preventDefault();

        const user ={
            name : this.state.name,
            email : this.state.email,
        }
        let x = await axios.post('https://reqres.in/api/users', user)
        console.log(x)
        
    
    }



    

  render() {

    let fbConnect;
    if(this.state.isLoggedIn){
        fbConnect = (
            <div style={{
                width:'400px',
                margin : 'auto',
                background : '#f4f4f4',
                padding : '20px'

            }}>

                    <h2> Welcome {this.state.name}</h2>
                    Email : {this.state.email}
                    <p> You have registered with us through your Facebook </p>

            </div>
        )
    }
    else{
        localStorage.removeItem("tokenUser")
        fbConnect = (<FacebookLogin
            appId="2727358970866535"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            textButton='Sign up with Facebook'
            size='small'
            cssClass ='buttonclass'
            callback={this.responseFacebook} />);
        
    }

    return (
      <div>
          {fbConnect}
      </div>
    );
  }
}