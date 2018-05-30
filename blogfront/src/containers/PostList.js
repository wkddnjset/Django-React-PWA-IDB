import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { fetchPost } from '../actions/getPostList';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderPost () {
    return this.props.postList.map((post) => {
      return <li key={post.id}><Post postData={post}/></li>;
    });
  }

  render () {
    return (
      <div>
        <h2>모임 리스트</h2>
        <ul>
          {this.renderPost()}
        </ul>

      </div>
    );
  }
}

export default connect((state) => {
  return {
    postList: state.lists.postList
  };
}, { fetchPost })(PostList);