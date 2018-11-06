import React from 'react'
import PropTypes from 'prop-types'
import axiosWrapper from "../../api";
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {searchResult} from "../../actions/index";
import NewsCard from "../NewsCard/index";
import Waypoint from 'react-waypoint'

export class NewsFeed extends React.Component {
    state = { page: 1 }

    _handleLoadFunc =()=> {
        const { page } = this.state;
        const { match, searchResult} = this.props;
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
        const location = match.path === '/' ? '/news' : match.path;
        axiosWrapper.get(location, page).then(
            (res) => {
                searchResult(res.data, 3)
            },
        )
    }

    render() {
        const {result} = this.props;
        return (
            <div>
                {result && result.map((item, i) =>
                    <div key={i}>
                        <NewsCard item={item}/>
                    </div>
                )}
                <Waypoint
                    onEnter={this._handleLoadFunc}
                    threshold={2.0}
                />
            </div>
        )
    }
}

NewsFeed.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    result: state.searchResult.data
})

const mapDispatchToProps = dispatch => ({
    searchResult: (value, id) => dispatch(searchResult(value, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewsFeed))