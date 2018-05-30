import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail from '../components/Detail';
import { fetchDetail } from '../actions/getPostDetail';

class PostDetail extends Component {
  componentDidMount() {
    const postid = this.props.match.params.id;
    this.props.fetchDetail(postid);
  }

  renderDetail () {
    if (this.props.postDetail === undefined){
      return <h2>Loading...</h2>
    }
    else{
      return this.props.postDetail.map((detail) => {
          return <li key={detail.id}><Detail detailData={detail}/></li>;
      });
    }
  }

  render () {
    return (
      <div>
        <h2>모임 상세보기</h2>
        <ul>
          {this.renderDetail()}
        </ul>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    postDetail: state.detail.postDetail
  };
}, { fetchDetail })(PostDetail);