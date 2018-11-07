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

export class Main extends React.Component {

    render() {
        const { location } = this.props
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={News} key={location.pathname} />
                    <Route path='/news' component={News} key={location.pathname} />
                    <Route path='/ask' component={Ask} key={location.pathname} />
                    <Route path='/newest' component={Newest} key={location.pathname} />
                    <Route path='/show' component={Show} key={location.pathname} />
                    <Route path='/jobs' component={Jobs} key={location.pathname}/>
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
