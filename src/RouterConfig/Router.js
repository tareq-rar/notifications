import React, {Component, Fragment} from "react";
import WithContextCustomHook from '../components/HOC/withContext';

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {withRouter} from 'react-router';
import Button from '@material-ui/core/Button';



// import ScrollToTop from "./ScrollToTop";
import indexRoutes from "./routes";

import {TransitionGroup, CSSTransition} from "react-transition-group";
import Header from '../components/Header';
import componetnsConfig from "../components/componentsConfig";

const HeaderRightActions = () => {
    return(
        <Button
            style={{
                padding: 40,
                width: '20rem',
                fontSize: '1.5rem'
            }}
        >Logout</Button>
    );
};

const HeaderNavigations = () => {
    return(
        <ul className="navigation__list">
            {
                indexRoutes.map((route, key) => {
                    return (
                        <li className="navigation__list-item" key={key}>
                            <Link to={route.path}>
                                {route.name}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const HeaderNavigationsRouted = withRouter(HeaderNavigations);


function Routes(){
    return(
        <Router>
            <Route
                render={({location}) => (
                    <Fragment>
                        <Header
                            logo={componetnsConfig.appLogo}
                            rightActions={<HeaderRightActions />}
                            navigation={<HeaderNavigationsRouted />}
                        />
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={500}>
                                {/*<ScrollToTop>*/}
                                <div className="content">
                                    <Switch location={location}>
                                        {indexRoutes.map((prop, key) => {
                                            return (
                                                <Route path={prop.path} key={key} component={prop.component} exact={prop.exact} />
                                            );
                                        })}
                                    </Switch>
                                </div>
                                {/*</ScrollToTop>*/}
                            </CSSTransition>
                        </TransitionGroup>
                    </Fragment>
                )}
            />
        </Router>
    );
}

export default Routes;
