import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

const Header =()=>{
    return (
        <header className="heading d-flex">
            <div className="d-flex align-center gap-sm">
                <img src="notes-sm.png" alt="logo"/>
                <h1 className='heading-1'>
                    <Link className="link" to="'/">NoteIt</Link>
                </h1>
            </div>

            <nav className="nav d-flex align-center">
                <ul>
                    <li className="list"><Link className="link cursor" to="/">Home</Link></li>
                    <li className="list"><Link className="link cursor" to="/archive">Archive</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;