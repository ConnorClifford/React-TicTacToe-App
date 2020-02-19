import React from 'react';

class Login extends React.Component {
    handleClick() {
        console.log("User is logging in! uwu");
        console.log(this.refs.username.value);
        console.log(this.refs.password.value);
        if(this.refs.username.value && this.refs.password.value === "test"){
            this.props.loginUser();
        }
    }
    render(){
        return (
            <div >
                <input type ="text"  ref = "username"></input><br></br>
                <input type ="password" ref="password"></input><br></br>
                <input type="button" value="Login" onClick={() => this.handleClick()}></input>
            </div>
        );
    }
}
export default Login;