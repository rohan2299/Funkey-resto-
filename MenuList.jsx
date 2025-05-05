/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"

class MenuList extends React.Component {
    render() {
        return (
            <div class="cards">
            
            <img src={this.props.micky.img}  alt="" />
            <a href="#"> <h2>{this.props.micky.name}</h2>
           </a>
        </div> 
        );
    }
};

export default MenuList;


// import React from "react";

// const MenuList = ({ mlist }) => {
//     // eslint-disable-next-line no-unused-vars
//     const renderList = () => {
//         if(mlist) {
//             return mlist.map(micky => (
//                 <div class="cards">
            
//                 //             <img src={micky.img}  alt="" />
//                 //             <a href="#"> <h2>{micky.name}</h2>
//                 //            </a>
//                 //         </div> 
//             ));
//         }
//     };

// };

// export default MenuList;
