import React, { useEffect, useState } from 'react';
import API from '../../services';

import { Container } from 'react-bootstrap';

const Detail = (props) => {
    const [post, setPost] = useState({});
    
    useEffect(() => {
        async function fetchPost () {
            const result = await API.getPostId(props.match.params.id);
            setPost(result);
        }
        fetchPost();
    }, [props])

    return (
        <Container className='py-4 px-0'>
            <p>ID Post: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
        </Container>
    )
}

export default Detail;