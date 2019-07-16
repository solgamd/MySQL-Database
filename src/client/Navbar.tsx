import React from 'react';
import { Link } from 'react-router-dom';


export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-yellow">
            <a className="navbar-brand"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="btn btn-primary nav-link">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/new" className="btn btn-primary nav-link shadow-sm">Write A Chirp</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mentions" className="btn btn-primary nav-link shadow-sm">Mentions</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;