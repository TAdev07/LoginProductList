import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
            name : 'Nhập hàng',
            to : '/inbound',
            exact : true
        },
        {
            name : 'Quản lý tồn kho',
            to : '/inventory',
            exact : false
        },
        {
            name : 'Xuất hàng',
            to : '/outbound',
            exact : false
        },
        {
            name : 'Trả hàng',
            to : '/reverse',
            exact : false
        },
        {
            name : 'Xử lý lỗi',
            to : '/process-error',
            exact : false
        },
        {
            name : 'Luân chuyển',
            to : '/transfer',
            exact : false
        },
        {
            name : 'Master Data',
            to : '/master-data',
            exact : false
        }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={`my-class ${active}`}>
                  <Link to={to}>
                    { label }
                  </Link>
                </li>
                )
        }}/>
    )
}
class Menu extends Component {

    onClick = () => {      
        localStorage.removeItem('token');
    }

  render() {

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    { this.showMenus(menus) }
                </ul>
                <Link 
                    to="/Login" 
                    onClick={this.onClick} 
                    className="btn btn-default sign-up" 
                    >
                    Login
                </Link>  
            </div>
        </nav>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
        result = menus.map((menu, index) => {
            return (
                <MenuLink key={index} to={menu.to} label={menu.name} activeOnlyWhenExact={menu.exact} />
                );
        })
    }
    return result;
}
}



export default Menu;
