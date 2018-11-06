import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router'
import News from "./pages/News";
import Ask from "./pages/Ask";
import axiosWrapper from "./api";
import {connect} from 'react-redux'
import {searchResult} from "./actions";

export class Main extends React.Component {

    componentDidMount() {
        const { match, searchResult } = this.props
        const path = match.path === '/' ? '/news' : match.path
        axiosWrapper.get(path, 1).then(
            (res) => {
                searchResult(res.data, 2)
            },
        );
    }

    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={News}/>
                    <Route path='/news' component={News}/>
                    <Route path='/ask' component={Ask}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main))
