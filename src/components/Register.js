import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtUsername : 'abc',
            txtPassword : '123',
            txtDesc : 'Hello',
            sltGender : 0,
            rdLang : 'vi',
            chkbStatus : false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                          <h3 className="panel-title">Form</h3>
                      </div>
                      <div className="panel-body">
                          <form>
                           
                              <div className="form-group">
                                  <label>Username: </label>
                                  <input type="text" className="form-control" name="txtUsername" onChange={this.onHandleChange} value={this.state.txtUsername} />
                              </div>

                              <div className="form-group">
                                  <label>Password: </label>
                                  <input type="password" className="form-control" name="txtPassword" onChange={this.onHandleChange} value={this.state.txtPassword} />
                              </div>
                                
                                <div className="form-group">
                                  <label>Miêu tả: </label>
                                  <textarea className="form-control" rows="3" name="txtDesc" onChange={this.onHandleChange} value={this.state.txtDesc} ></textarea>
                              </div>

                              <div className="form-group">
                                  <label>Giới tính: </label>
                                  <select name="sltGender" className="form-control" onChange={this.onHandleChange} value={this.state.sltGender}>
                                      <option value={1}>Nam</option>
                                      <option value={0}>Nữ</option>
                                  </select>
                              </div>

                              <div className="radio">
                                    <label>Ngôn ngữ/Language</label><br/>
                                  <label>
                                      <input type="radio" name="rdLang" value="en" checked={this.state.rdLang === 'en'} onChange={this.onHandleChange}/>
                                      English
                                  </label><br/>
                                  <label>
                                      <input type="radio" name="rdLang" value="vi" checked={this.state.rdLang === 'vi'} onChange={this.onHandleChange}/>
                                      Tiếng Việt
                                  </label>
                              </div>

                              <div className="checkbox">
                                  <label>
                                      <input type="checkbox" name="chkbStatus" value={this.state.chkbStatus} onChange={this.onHandleChange} checked={this.state.chkbStatus} />
                                      Tôi không phải robot
                                  </label>
                              </div>

                              <button type="submit" className="btn btn-primary" onClick={this.onHandleSubmit}>Đăng ký</button>
                              <button type="submit" className="btn btn-warning" >Đăng Nhập</button>
                          </form>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Register;
