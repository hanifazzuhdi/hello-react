import React, { Component } from 'react';
import API from '../services';

import { Container } from 'react-bootstrap';

class Post extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        const data = await API.getPost();

        this.setState({
            posts: data
        });
    }

    goDetail = (id) => {
        this.props.history.push(`/post/${id}`);
    }

    render() {
        const style = {cursor: 'pointer', marginBottom: '5px'};

        return (
            <Container className='py-5 px-0'>
                <h1 className='mb-3'>Posts Title</h1>

                {
                    this.state.posts.map((post) => {
                        return <li style={style} key={post.id} onClick={() => this.goDetail(post.id)} >{post.title}</li>
                    })
                }
            </Container>
        )
    }
}

export default Post;