import React from "react"
import PropTypes from "prop-types"
import AFavButt from './AFavButt'
class OPostPart extends React.Component {
  render () {
    const postLink = "posts/"+this.props.post.id
    return (
      <div>
      <a href={postLink}>
        <p className="catid">{this.props.post.category_id}</p>
      <img src={this.props.post.image.url} className="postimg"/>
      <h2 className="postnametitle">{this.props.post.name}</h2>
        <h2 className="posttitle">{this.props.post.title}</h2>
</a>
      </div>

    );
  }
}

export default OPostPart
