import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from "./styles";

class NewsCard extends React.Component {
    state = { showComments: false }

    handleShowComments = () => {
        this.setState(prevState => ({
            showComments: !prevState.showComments
        }));
    }

    render () {
        const { item } = this.props
        const { showComments } = this.state
        return (
            <Wrapper>
                <p>{item.title}</p>
                <p>{item['time_ago']}</p>
                <div onClick={this.handleShowComments}>
                    {!showComments ?
                        <p>Show Comments</p> :
                        <p>Hide Comments</p>
                    }
                </div>
            </Wrapper>
        )
    }
}

NewsCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        time_ago: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsCard
