import React from 'react'
import axiosWrapper from "../api";
import {connect} from 'react-redux'
import {searchResult} from "../actions";
import NewsCard from "../components/Sample";
import Waypoint from 'react-waypoint'

export class Newsfeed extends React.Component {
    state = { page: 1 }

    componentDidMount() {
        const { page } = this.state
        axiosWrapper.get(page).then(
            (res) => {
                this.props.searchResult(res.data, 2)
            },
        );
    }

    _handleLoadFunc =()=> {
        const { page } = this.state
        this.setState(prevState => ({
            page: prevState.page + 1
        }))
        axiosWrapper.get(page).then(
            (res) => {
                this.props.searchResult(res.data, 3)
            },
        )
    }

    render() {
        const {result} = this.props
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

const mapStateToProps = state => ({
    result: state.searchResult.data
})

const mapDispatchToProps = dispatch => ({
    searchResult: (value, id) => dispatch(searchResult(value, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
