import React, { Component } from 'react';
import JSON from './db.json';
import ProductList from '../ProductList';

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            Cards: JSON
        }
    }
    render() {
        return (
            <div>
                <section className="foodMenu">
                    {this.state.Cards.map((data, index) => {
                        return <ProductList key={index} card={data} />;
                    })}
                </section>
            </div>
        );
    }
}

export default Cards;



