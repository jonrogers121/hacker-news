import React from 'react'
import PropTypes from 'prop-types'
import axiosWrapper from "../../api";
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {searchResult} from "../../actions/index";
import NewsCard from "../NewsCard/index";
import Waypoint from 'react-waypoint'
import { Container  } from 'bloomer';

export class NewsFeed extends React.Component {
    state = { page: 1 }

    componentDidMount() {
        const { match, history } = this.props
        const path = match.path === '/' ? '/news' : match.path
        this._handleFetchContent(path, 1, true)
        history.listen(() => {
            this._handleFetchContent(path, 1, true)
        })
    }

    _handleFetchContent = (path, page, firstLoad) =>{
        axiosWrapper.get(path, page).then(
            (res) => {
                this.props.searchResult(res.data, firstLoad)
            },
        );
    }

    _handleLoadFunc =()=> {
        const { page } = this.state;
        const { match } = this.props;
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
        const location = match.path === '/' ? '/news' : match.path;
        this._handleFetchContent(location, page)
    }

    render() {
        const {result} = this.props;
        return (
            <Container>
                {result && result.map((item, i) =>
                    <div key={i}>
                        <NewsCard item={item}/>
                    </div>
                )}
                <Waypoint
                    onEnter={this._handleLoadFunc}
                    threshold={2.0}
                />
            </Container>
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
