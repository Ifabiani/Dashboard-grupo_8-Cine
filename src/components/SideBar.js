import React from 'react';
import image from '../assets/images/logo-1.png';
import ContentWrapper from './ContentWrapper';
import ProductsInDb from './ProductsInDb';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import UsersInDb from './UsersInDb';
import CountByGenres from './CountByGenres';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav body sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100 logo" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>CINEMA PARADISO</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/ProductsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Películas</span>
                    </Link>
                </li>

                {/* <!-- Nav Item - Pages --> */}
                {/* <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Generos</span>
                    </Link>
                </li> */}

                 {/*<!-- Nav Item - Charts -->*/}
                 {/* <li className="nav-item">
                    <Link className="nav-link" to="/UsersInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span></Link>
                </li> */}

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Última pelicula</span></Link>
                </li>

                 {/*<!-- Nav Item - Charts -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/CountByGenres">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Peliculas por género</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Resúmenes</span></Link>
                </li>

                {/*<!-- Nav Item - Search Movies -->*/}
                {/* <li className="nav-item nav-link">
                <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Search Movies</span></Link>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ProductsInDb">
                    <ProductsInDb />
                </Route>
                {/* <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/UsersInDb">
                    <UsersInDb />
                </Route> */}
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/CountByGenres">
                    <CountByGenres />
                </Route>
                
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                {/* <Route path="/SearchMovies">
                    <SearchMovies />
                </Route> */}
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;