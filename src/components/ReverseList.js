import React, { Component } from 'react';
import callAPI from './../utils/apiCaller';

class ReverseList extends Component {

	constructor(props){
	    super(props);
		this.state = {
			reverse : {},
		}
	}

	componentDidMount(){
		var { sltQuantity, activePage } = this.props;
		var token = localStorage.getItem('token')
		var headers = {	
						'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization' : token
					}

		callAPI(`co/session?limit=${sltQuantity}&page=${activePage}&`, 'GET', '', headers).then(res => {
			if(res){
				var data = res.data.data.records;
				this.setState({
					reverse : data
				});
			}
			
		}).catch(err => {
			console.log(err);
		});

	}

	componentWillReceiveProps(nextProps) {
		var { sltQuantity, activePage } = nextProps
		var token = localStorage.getItem('token')
		var headers = {	
						'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization' : token
					}

		callAPI(`co/session?limit=${sltQuantity}&page=${activePage}&`, 'GET', '', headers).then(res => {
			if(res){
				var data = res.data.data.records;
				this.setState({
					reverse : data
				});
			}
			
		}).catch(err => {
			console.log(err);
		});
	}

	showStatus = (value) => {
		var result = '';
		switch(value) {
		    case 'co_putaway':
		        result = 'Chờ cất';
		        break;
		    case 'co_inspect':
		        result ='Chờ kiểm';
		        break;
		    case 'done':
		        result = 'Xong';
		        break;
		    default:
		        result = 'error';
		        break;
		}
		return result;
	}


	showProductList = (reverse) => {
  		var result = null;
  		if(reverse.length > 0){
  			result = reverse.map((data, index) => {
  				return (
	  					<tr key={index}>
	            			<td>{data.code}</td>
	            			<td>{data.create_date}</td>
	            			<td>{data.transporter}</td>
	            			<td>{data.warehouse}</td>
	            			<td>{this.showStatus(data.state)}</td>
	            		</tr>
  					);
  			});
  		}
  		return result;
  	}

	render() {
		var { reverse } = this.state;
		var { sltQuantity } = this.props;
		console.log(sltQuantity)
		return (
			<tbody>
				{this.showProductList(reverse)}
			</tbody>
			);
	}
}

export default ReverseList;
