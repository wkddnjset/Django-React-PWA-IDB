import React from 'react';


export default ({ postData }) => {
  return (
    <div>
      <a href={postData.id}>{postData.title}</a>
    </div>
  );
}