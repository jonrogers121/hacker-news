import React from 'react'
import { Wrapper } from "./styles";

const NewsCard = ({item}) => (
    <Wrapper>
        <p>{item.title}</p>
        <p>{item['time_ago']}</p>
    </Wrapper>
)
export default NewsCard
