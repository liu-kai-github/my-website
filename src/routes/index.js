import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import App from "src/views/App";
// import Game from 'src/views/Game';
// import GameHistory from 'src/views/GameHistory';
// import GameIntroduce from "../views/GameIntroduce";

// const App = Loadable({
//     loader: () => import('src/views/App'),
//     loading() {
//         return <div>Loading...</div>
//     },
// });
const Game = Loadable({
    loader: () => import('src/views/Game'),
    loading() {
        return <div>Loading...</div>
    },
});
const GameHistory = Loadable({
    loader: () => import('src/views/GameHistory'),
    loading() {
        return <div>Loading...</div>
    },
});
const GameIntroduce = Loadable({
    loader: () => import('src/views/GameIntroduce'),
    loading() {
        return <div>Loading...</div>
    },
});

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
