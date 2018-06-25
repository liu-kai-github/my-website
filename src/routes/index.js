import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import App from "src/views/App";
import Login from "src/views/Login";
import PhotoAlbum from "../views/PhotoAlbum";

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
            <Route
                path="/login"
                // key={key}
                component={Login}
                // exact
            />
            <Route
                path="/photo-album"
                // key={key}
                component={PhotoAlbum}
                // exact
            />
        </Switch>
    );
}

export default IndexRoutes;
