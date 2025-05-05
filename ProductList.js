import React from "react"

class ProductList extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="box1">
                    <img src={this.props.card.img} alt="" />
                    <h3>{this.props.card.name}</h3>
                    <p><i className="fas fa-indian-rupee-sign"></i> {this.props.card.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        );
    }
};

export default ProductList;


// import React from "react";

// const ProductList = ({ prodlist }) => {
//     const renderList = () => {
//         if(prodlist) {
//         return prodlist.map((card)=>{
//         return(
//       <div key={card.id} className="box">
//       <div className="box1">
//     <img src={card.img} alt="" />
//     <h3>{card.name}</h3>
//     <p><i className="fas fa-indian-rupee-sign"></i>{card.price}</p>
//     <button>Add to Cart</button>
// </div>
// </div>
//                 )
//             })
            
//         }
//     };
//  return <div>{renderList()}</div>;
// };

// export default ProductList;


