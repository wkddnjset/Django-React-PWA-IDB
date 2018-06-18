import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';
import { fetchPost } from '../actions/getPostDetail';

class PostDetail extends Component {

  componentDidMount() {
    const postid = this.props.match.params.id;
    this.props.fetchPost(postid);
  }

  // renderDetail () {
  //   return this.props.postDetail.map((detail) => {
  //     return <li key={detail.id}><Detail detailData={detail}/></li>;
  //   });
  // }

  render () {
    const { postDeatil, loading } = this.props.fetchPost;
    if (loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <h2>모임 상세보기</h2>
        {
          loading 
            ? (<h3>Loading...</h3>)    
            : (<ul><li key={postDeatil.id}><Detail detailData={postDeatil}/></li></ul>)
        }
      </div>
    );
  }
}

export default connect((state) => {
  return {
    postDetail: state.detail.postDetail
  };
}, { fetchPost })(PostDetail);