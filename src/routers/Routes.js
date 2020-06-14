import React, { Fragment } from "react";
import { Switch, Route, } from "react-router-dom";

// page
import Homepage from "../pages/Homepage";
import Footers from "../components/Footers";
import SignUp from "../components/SignUp";
import Profile from "../pages/Profile";
import Detail from "../pages/DetailPageOverview";
import Review from "../pages/Review";




const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/review" exact component={Review} />
                <Footers />
            </Switch>
        </Fragment>
    );
}

export default Routes;