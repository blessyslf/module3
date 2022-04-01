import React from "react"
import PropTypes from "prop-types"
import OPostPart from "./OPostPart.js"
class OAllPosts extends React.Component {
  render () {
    return (

      <div>
        <div className="firstblock">
        {this.props.posts.slice(0,2).map(post => (
           <OPostPart post={post}/>
        ))}
        </div>

        <div className="secondblock">
        {this.props.posts.slice(2,3).map(post => (
           <OPostPart post={post}/>
        ))}
        </div>

        <div className="thirdblock">
        {this.props.posts.slice(3,5).map(post => (
           <OPostPart post={post}/>
        ))}
        </div>

        <div className="fourthblock">
        {this.props.posts.slice(5,6).map(post => (
           <OPostPart post={post}/>
        ))}
        </div>


      </div>

    );
  }
}

OAllPosts.propTypes = {
  posts: PropTypes.array
};

export default OAllPosts
