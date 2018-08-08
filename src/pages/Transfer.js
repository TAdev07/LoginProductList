import React, { Component } from 'react';
import callAPI from './../utils/apiCaller';
import axios from 'axios';


class Transfer extends Component {
	constructor(props){
	    super(props);
		this.state = {
			transfer : {}
		}
	}
	componentDidMount(){
		var token = localStorage.getItem('token')
		console.log(token);
		var headers = {	'Content-Type': 'application/x-www-form-urlencoded',
						'Authorization' : token
					}

		callAPI('transfer/list?limit=30&page=1&', 'GET', '', headers).then(res => {
			if(res){
				var data = res.data.data.records;
				this.setState({
					transfer : data
				});
			}
			
		}).catch(err => {
			console.log(err);
		});

	}

	showStatus = (value) => {
		var result = '';
		switch(value) {
		    case 'tr_picked':
		        result = 'Chờ luân chuyển';
		        break;
		    case 'done':
		        result ='Xong';
		        break;
		    case 'tr_picking':
		        result = 'Lấy hàng';
		        break;
		    default:
		        result = 'error';
		        break;
		}
		return result;
	}

	showProductList = (transfer) => {
  		var result = null;
  		if(transfer.length > 0){
  			result = transfer.map((data, index) => {
  				return (
	  					<tr key={index}>
	            			<td>{data.code}</td>
	            			<td>{data.seller}</td>
	            			<td>{data.create_date}</td>
	            			<td>{data.warehouse}</td>
	            			<td>{data.warehouse_dest}</td>
	            			<td>{data.transfer_type = 'move_sale' ? 'Chuyển bán' : 'Chuyển liên khu vực'}</td>
	            			<td>{data.product_qty}</td>
	            			<td>{this.showStatus(data.state)}</td>
	            		</tr>
  					);
  			});
  		}
  		return result;
  	} 

  render() {
  	var { transfer } = this.state;

  	console.log(transfer)
    return (
    	<div>
            <h1>Đây là trang luân chuyển</h1>
            <table className="table table-bordered table-hover">
            	<thead>
            		<tr>
            			<th>Mã phiếu</th>
            			<th>Seller</th>
            			<th>Ngày Tạo</th>
            			<th>Kho đi</th>
            			<th>Kho đến</th>
            			<th>Loại chuyển</th>
            			<th>Lượng chuyển</th>
            			<th>Trạng thái</th>
            		</tr>
            	</thead>
            	<tbody>
            		{this.showProductList(transfer)}
            	</tbody>
            </table>
        </div>
    );
  }
}

export default Transfer;
