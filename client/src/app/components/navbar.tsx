import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useAuth0 } from '../features/auth0/auth0-context';
import { logOut } from "../reducers/favoriteSlice"
import store from "../store"
function NavBar() {
    const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <header>
            <div className="container-fluid no-side-padding">
                <ul className="main-menu visible-on-click row justify-content-right" id="main-menu">
                        <div className="col-10"></div>
                        <div className='col'>
                    <Link className={"nav-link"} to={"/"}>
                        {!isLoading && !user && (
                            <>
                                <button className="btn btn-success mt-1" onClick={loginWithRedirect}>
                                    Sign In
                                </button>
                            </>
                        )}
                        {!isLoading && user && (
                            <>
                                <div>
                                    <button className="btn btn-danger" onClick={() => {logout({ returnTo: window.location.origin })}}>
                                        Sign Out 
                                    </button>
                                </div>
                            </>
                        )}
                    </Link>
                    </div>
                    {/* <li><Link className={"nav-link"} to={"/"}> Home </Link></li> */}
            
                </ul>
            </div>
        </header>
    );
}
// export default withRouter(Navbar);
  export default NavBar