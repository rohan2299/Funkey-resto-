import React, { Component } from 'react';
import JSON from './db1.json'
import MenuList from '../MenuList';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            MMenu: JSON
        }
    }
    render() {
        return (
         <div class="card">
        {this.state.MMenu.map((data, index) => {
                        return <MenuList key={index} micky={data} />;
                    })}
         
     </div>
        );
    }
}

export default Menu;


