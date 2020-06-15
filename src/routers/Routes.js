import React, { Fragment } from "react";
import { Switch, Route, } from "react-router-dom";

// page
import Homepage from "../pages/Homepage";
import Footers from "../components/Footers";
import SignUp from "../components/SignUp";
import Detail from "../pages/DetailPageOverview";
import Review from "../pages/Review";
import Character from "../pages/Character";




const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/detail" exact component={Detail} />
                <Route path="/review" exact component={Review} />
                <Route path="/character" exact component={Character} />
            </Switch>
            <Footers />
        </Fragment>
    );
}

export default Routes;