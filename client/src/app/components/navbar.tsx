import React,  { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../features/auth0/auth0-context';
import { loginChange } from "../reducers/favoriteSlice"
import { User } from "../features/auth0/types"
import { RootState } from "../reducers/index"

function NavBar() {
    const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const dispatch = useDispatch();

    const stateUser : User | {} = useSelector((state: RootState) => state.favorites.user)

    useEffect(() => {
        if(!user)
        dispatch(loginChange())
      }, [stateUser])

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
            
                </ul>
            </div>
        </header>
    );
}
  export default NavBar