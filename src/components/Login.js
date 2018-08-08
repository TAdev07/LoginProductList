import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import callAPI from './../utils/apiCaller';

class Login extends Component {
    constructor(props){
        super(props);
    	this.state = {
    		txtUsername : '',
    		txtPassword : '',
            token : '',
    		redirectToReferrer: false,
            error : false
    	}
        }

    onChange = (e) => {
    	var target = e.target;
    	var name = target.name;
    	var value = target.type === 'checkbox' ? target.checked : target.value;
    	this.setState({
    		[name] : value
    	})
    }

    onLogin = (e) => {
    	e.preventDefault();
        var { token, txtUsername, txtPassword } = this.state;
        var bodyFormData = new FormData();
        bodyFormData.set('email',txtUsername);
        bodyFormData.set('password',txtPassword);

        callAPI('auth/token', 'POST', bodyFormData).then(res =>{
            if(res.data){
                var token = res.data.token;
                localStorage.setItem('token',res.data.token);
                this.setState({ redirectToReferrer: true });
            }
        }).catch(err => {
            if(err){
                this.setState({
                    error : true
                })
            }
        });;

    	
    }



  
  render() {
  	var { error, txtUsername, txtPassword } =this.state;
  	const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to='/transfer' />;
    }

    return (
      	<div className="row">
      		<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      			
      		</div>
      		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      			<form onSubmit={this.onLogin}>
      				<legend>Đăng nhập</legend>
      			
      				<div className="form-group">
      					<label>Tài khoản</label>
      					<input type="text" className="form-control" name="txtUsername" value={txtUsername} onChange={this.onChange}/>
      				</div>
      				<div className="form-group">
      					<label>Mật khẩu</label>
      					<input type="password" className="form-control" name="txtPassword" value={txtPassword} onChange={this.onChange}/>
      				</div>

      				<button type="submit" className="btn btn-primary">Đăng nhập</button><br />
                    <span className="label label-warning">{error ? 'tài khoản hoặc mật khẩu không chính xác' : ''}</span>
              
      			</form>
      		</div>
      	</div>
    );
  }
}

export default Login;
