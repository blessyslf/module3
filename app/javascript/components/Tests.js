import React from "react"
import PropTypes from "prop-types"
import AMainBaner from './AMainBaner'
import AMainbanertext from './AMainbanertext'

class Tests extends React.Component {
  render () {
    return (
      <div>
      <AMainBaner/>
        <AMainbanertext/>
      </div>
    );
  }
}

export default Tests
