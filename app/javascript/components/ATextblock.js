import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ATextblock.scss'

class ATextblock extends React.Component {
  render () {
    return (
      <p>
        {this.props.text}
      </p>

    );
  }
}

export default ATextblock
