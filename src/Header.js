import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"; 

function Header() {
    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    };
    // console.log(basket);
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
            <img className="header__logo" src="imagess/amazonlogo.png" alt="AmazonLogo"/>
            </Link>    
            {/* Search Box */}
            <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 Links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                <span className="header__optionLineOne">Hello {user?.email}</span>
                <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
                {/* 4th link */}
                
                <Link to="/checkout" className="header__link">
                    {/* here clsname is for styling purpose icon turned white */}
                    <div className="header__optionBasket">
                        {/* Shopping Basket Icon */}
                        <ShoppingBasketIcon />
                        {/* No.of items in the Basket */}
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        {/* headeroptn2 made 0 bold */}
                    </div>
                </Link>

            </div>
            {/* Basket Icon with Number */}
        </nav>
    )
}

export default Header
