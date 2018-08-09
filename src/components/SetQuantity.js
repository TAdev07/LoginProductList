import React, { Component } from 'react';

class SetQuantity extends Component {

	onChange = (e) => {
  		this.props.sltQuantity(e.target.value);
  	}

  render() {

    return (
      <div>
        <span> Hiển thị  </span>
      	<select name="sltQuantity" onChange={this.onChange} required="required">
              	<option value="10">10</option>
              	<option value="20">20</option>
              	<option value="30">30</option>
        </select>
        <span>  dòng</span>
      </div>
    );
  }
}

export default SetQuantity;
