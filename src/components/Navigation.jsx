import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { useDispatch } from 'react-redux';
import { searchQuery } from '../features/common/commonSlice';

function Navigation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSearch = (e)=>{ 
    const {value} = e.target;
    if(value.length > 3){
      dispatch(searchQuery(value))
      navigate('/search')
    }      
  }
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
        <Link className="navbar-brand" href="#"><img src={logo} alt="Bootstrap" width="30" height="24"></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/browse/tv">Tv</Link>
              </li>            
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/browse/movie">Movies</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to='/browse/signup'>SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/browse/signin'>SignIn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/browsebygenre/movie/28">BrowseByGenre</Link>
              </li>       
              <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearch} />
      </form>    
            </ul>         
          </div>
        </div>
      </nav>
    );
}

export default Navigation;