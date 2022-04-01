import React from "react"
import PropTypes from "prop-types"
import ALessonSteps from './ALessonSteps'
import AFavouritebutton from './AFavouritebutton'
import ARateStarsles from './ARateStarsles'
import AStepp from './AStepp'
class MLesson extends React.Component {
  render () {
    return (
      <div>
        <p className="catiddd">{this.props.post.category_id}</p>
        <h1 className="lessontitle">{this.props.post.title}</h1>
        <p className="lessontext" dangerouslySetInnerHTML={{__html: this.props.post.content}} />
              <img src={this.props.post.image.url} className="postgif"/>
<AFavouritebutton/>
<ALessonSteps/>
<ARateStarsles/>
<AStepp/>
      </div>

    );
  }
}

export default MLesson
