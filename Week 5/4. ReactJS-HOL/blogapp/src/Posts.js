import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

    // Step 5 (Figure 3): initialize state with an empty list of posts
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    // Step 6 (Figure 4): fetch posts from the API and store them in state
    loadPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
            .catch(error => {
                console.log('Error fetching posts:', error);
            });
    }

    // Step 7 (Figure 5): call loadPosts() once the component has mounted
    componentDidMount() {
        this.loadPosts();
    }

    // Step 9 (Figure 7): catch any rendering errors in this component's
    // subtree and show them as an alert message
    componentDidCatch(error, info) {
        alert('Something went wrong: ' + error.toString());
    }

    // Step 8 (Figure 6): render the title and body of every post
    render() {
        return (
            <div className="posts">
                {this.state.posts.map(post => (
                    <Post
                        key={post.id}
                        title={post.title}
                        body={post.body}
                    />
                ))}
            </div>
        );
    }
}

export default Posts;