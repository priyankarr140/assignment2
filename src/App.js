import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email:'',
            tel:'',
            password: ''
        }
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeTel(e) {
        this.setState({
            tel: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`username is ${this.state.username},email is ${this.state.email},tel is
          ${this.state.tel}, password is${this.state.password}
          `);
        const serverport = {
            username: this.state.username,
            email: this.state.email,
            tel:this.state.tel,
            password:this.state.password
        }
        axios.post('http://localhost:5000/serverport/add', serverport)
        .then(res => console.log("data receieved"+res.data));
        this.setState({
            username: '',
            email: '',
            tel:'',
            password:''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Signup form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username  </label>
                        <input type="text" value={this.state.username} className="form-control" onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input type="email" value={this.state.email} className="form-control" onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Mobile </label>
                        <input type="tel" value={this.state.tel} className="form-control" onChange={this.onChangeTel}/>
                    </div>
                    <div className="form-group">
                        <label>password </label>
                        <input type="password" value={this.state.password} className="form-control" onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Signup" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
    }

export default App;
