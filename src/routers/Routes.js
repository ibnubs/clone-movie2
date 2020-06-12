import React, { Fragment } from "react";
import {Switch,Route,} from "react-router-dom";

// page
import Homepage from "../pages/Homepage";




const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/" exact component={Homepage} />
            </Switch>
        </Fragment>
    );
}

export default Routes;