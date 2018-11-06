import React from 'react'
import PropTypes from 'prop-types'
import {Box, Button} from 'bloomer';

class NewsCard extends React.Component {

    handleShowComments = () => {
        this.setState(prevState => ({
            showComments: !prevState.showComments
        }));
    }

    render() {
        const {item} = this.props
        return (
            <Box>
                <Button isColor='warning'>{item.user}</Button>
                <h2>
                    <a href={item.url}>
                        {item.title}
                    </a>
                </h2>
                <p>{item['time_ago']}</p>
            </Box>
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
