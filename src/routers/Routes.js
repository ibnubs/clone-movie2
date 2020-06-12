import React, { Fragment } from "react";
import { Switch, Route, } from "react-router-dom";

// page

import Homepage from "../pages/Homepage";
import Footers from "../components/Footers";



const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Footers />
            </Switch>
        </Fragment>
    );
}

export default Routes;