import React, { Component } from 'react';
import SetQuantity from './../components/SetQuantity';
import ReverseList from './../components/ReverseList';
import Pagination from 'react-js-pagination';

class Reverse extends Component {
	constructor(props){
	    super(props);
		this.state = {
			sltQuantity : 10,
			activePage : 1,
			listPage : 19
		}
	}
	
  	setQuantity = (value) => {
		this.setState({
			sltQuantity : value
		})
  	}

  	handlePageChange = (pageNumber) => {
  		console.log(`active page is ${pageNumber}`);
    	this.setState({activePage: pageNumber});
  	}

  render() {
  	var { sltQuantity, listPage, activePage } = this.state;

    return (
    	<div className="container">
            <h1>Danh sách phiên trả hàng</h1> 
            <SetQuantity sltQuantity={this.setQuantity} />
            <table className="table table-bordered table-hover">
            	<thead>
            		<tr>
            			<th>Mã phiên trả hàng</th>
            			<th>Ngày tạo</th>
            			<th>Đơn vị vận chuyển</th>
            			<th>Kho đến</th>
            			<th>Trạng thái</th>
            		</tr>
            	</thead>
            	<ReverseList sltQuantity={sltQuantity} activePage={activePage}/>
            </table>
            <Pagination
	            activePage={activePage}
	            itemsCountPerPage={sltQuantity}
	            totalItemsCount={listPage}
	            pageRangeDisplayed={5}
	            onChange={this.handlePageChange}
            />
        </div>
    );
  }
}

export default Reverse;
