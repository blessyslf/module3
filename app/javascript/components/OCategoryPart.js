import React from "react"
import PropTypes from "prop-types"
class OCategoryPart extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.category.name}</h1>
        <p className="catid">{this.props.category.category_id}</p>

      </div>

    );
  }
}

export default OCategoryPart
