import React, { Component } from 'react';

// Step 3 (Figure 2): Post component - receives title & body as props
// and displays them for a single blog post.
class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post">
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default Post;