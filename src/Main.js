import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import News from "./pages/News";
import Ask from "./pages/Ask";
import {connect} from 'react-redux'
import {searchResult} from "./actions";
import Newest from "./pages/Newest";
import Show from "./pages/Show";
import Jobs from "./pages/Jobs";
import NewsFeed from "./components/NewsFeed";

export class Main extends React.Component {

    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={NewsFeed} />
                    <Route path='/news' component={News} />
                    <Route path='/ask' component={Ask} />
                    <Route path='/newest' component={Newest} />
                    <Route path='/show' component={Show} />
                    <Route path='/jobs' component={Jobs} />
                </Switch>
            </main>
        )
    }
}

const mapStateToProps = state => ({
    result: state.searchResult.data
})

const mapDispatchToProps = dispatch => ({
    searchResult: (value, id) => dispatch(searchResult(value, id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
