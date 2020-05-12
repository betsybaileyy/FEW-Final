import React, { Component } from 'react';


class Like extends Component {

    state = {
        likes: 0
    }

    like = () => {
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };

    dislike = () => {
        let newCount = this.state.likes - 1;
          this.setState({
          likes: newCount
        });
      };

    render () {
    return (
        <div>
        <p>Likes: {this.state.likes} </p>
        <button onClick={this.like}>Like</button>
        <button onClick={this.dislike}>Dislike</button>
        </div>
    )
  }
}
  
  export default Like
