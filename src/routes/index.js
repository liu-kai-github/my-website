import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import App from "src/views/App";
import Game from 'src/views/Game';
import GameHistory from 'src/views/GameHistory';
import GameIntroduce from "../views/GameIntroduce";

function IndexRoutes() {
    return (
        <Switch>
            <Route
                path="/"
                // key={key}
                component={App}
                exact
            />
            <Route
                path="/game"
                component={Game}
            />
            <Route
                path="/history"
                component={GameHistory}
            />
            <Route
                path="/introduce"
                component={GameIntroduce}
            />
        </Switch>
    );
}

export default IndexRoutes;
