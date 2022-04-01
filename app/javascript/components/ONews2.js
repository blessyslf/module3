import React from "react"
import PropTypes from "prop-types"
import ANewsTitle2 from './ANewsTitle2'
import ANewsText2 from './ANewsText2'
import ANewsImage2 from './ANewsImage2'

class ONews2 extends React.Component {
  render () {
    return (
      <div>
      <div className='titlen1'
      <ANewsTitle2 title={"Отчетный концерт"}/>
      </div>
        <ANewsText2/>
          <ANewsImage2/>
      </div>
    );
  }
}

export default ONews2

import React from "react"
import PropTypes from "prop-types"
class ONews2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
            <p><strong>ID:</strong> {this.props.category.id}</p>
            <p><strong>Name:</strong> {this.props.category.name}</p>
            <p><strong>Description:</strong> {this.props.category.description}</p>
            <p><strong>Display in Navbar:</strong> {`${this.props.category.display_in_navbar}`}</p>
            <a href={`/categories/${this.props.category.id}/edit`}>Edit</a><span> | </span>
            <a href={`./`}>Back</a>
      </div>
    );
  }
}

export default ONews2
