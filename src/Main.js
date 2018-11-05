import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Newsfeed from "./pages/Newsfeed";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Newsfeed}/>
        </Switch>
    </main>
)

export default withRouter(Main)
