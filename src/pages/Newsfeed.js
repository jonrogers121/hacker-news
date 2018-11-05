import React from 'react'
import axiosWrapper from "../api";
import {connect} from 'react-redux'
import {searchResult} from "../actions";
import NewsCard from "../components/Sample";

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
                    <div key={i}>
                        <NewsCard item={item}/>
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
