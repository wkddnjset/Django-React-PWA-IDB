import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { fetchPosts } from '../actions/getPostList';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // renderPost () {
  //   return this.props.postList.map((post) => {
  //     return <li key={post.id}><Post postData={post}/></li>;
  //   });
  // }

  render () {
    return (
      <div>
        <h2>모임 리스트</h2>
        <ul>

        </ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    postList: state.posts.postList,
    postList: state.posts.postList.loading

  };
}, { fetchPosts })(PostList);