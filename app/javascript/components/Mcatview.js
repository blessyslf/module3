import React from "react"
import PropTypes from "prop-types"
class Mcatview extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.category.name}</h1>


            <a href={`/categories/${this.props.category.id}/edit`}>Edit</a><span> | </span>
            <a href={`./`}>Back</a>
      </div>
    );
  }
}

export default Mcatview
