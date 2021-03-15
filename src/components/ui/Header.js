import React from 'react';
import logo from '../../img/logo.jpg';


const Header = (props) => {
    const {handleChange, searchText} = props;
    
    return (
        <>
            <header className="center">
                <img src={logo} alt="logo"/>
            </header>
            <section className="search">
                <input
                    id="search-bar"
                    type="search"
                    placeholder="Search name of super heroes here..."
                    onChange={handleChange}
                    value={searchText}
                    className="form-control"
                    autoFocus
                /> 
            </section>
        </>
    )
}

export default Header;
