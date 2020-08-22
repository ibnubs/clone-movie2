import React, { Fragment } from "react";
import { Switch, Route, } from "react-router-dom";

// page
import Homepage from "../pages/Homepage";
import Footers from "../components/Footers";
import SignUp from "../components/SignUp";
import Detail from "../pages/MovieDetails";
import Review from "../pages/Review";
import Character from "../pages/Character";
import ProfilePage from "../pages/ProfilePage";





const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="outese/:id" exact component={Detail} />
                <Route path="/review/:id" exact component={Review} />
                <Route path="/character/:id" exact component={Character} />
                <Route path="/profile" exact component={ProfilePage} />
            </Switch>
            <Footers />
        </Fragment>
    );
}

export default Routes;