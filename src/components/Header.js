import React from "react";
import Data from "./Data";

const Header = (props) => {
    const {countCartItems} = props;
    return (
        <header className="row block center">
            <div><h1>Shopping Cart</h1></div>
            <div>
                <a>Cart{' '}
                {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                        )}
                        </a> <a>SignIN</a>
            </div>
        </header>
    )
}

export default Header;