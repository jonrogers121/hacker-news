import React from 'react'
import axiosWrapper from "../api";
import {connect} from 'react-redux'
import {searchResult} from "../actions";

export class Newsfeed extends React.Component {

    componentDidMount() {
        axiosWrapper.get().then(
            (res) => {
                this.props.searchResult(res.data)
            },
        );
    }

    render() {
        const {result} = this.props
        return (
            <div>
                {result && result.map((item, i) =>
                    <div>
                        <p>{item.title}</p>
                        <p>{item['time_ago']}</p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    result: state.searchResult.data
})

const mapDispatchToProps = dispatch => ({
    searchResult: (value) => dispatch(searchResult(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
