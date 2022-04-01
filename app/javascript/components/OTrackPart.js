import React from "react"
import PropTypes from "prop-types"
import AFavButt from "./AFavButt.js"
class OTrackPart extends React.Component {
  render () {
    const trackLink = "tracks/"+this.props.track.id
    return (
      <div>
      <a href={trackLink}>
        <p className="catiddd">{this.props.track.category_id}</p>
      <img src={this.props.track.image.url} className="courseimg"/>
        <h2 className="tracktitle">{this.props.track.title}</h2>
        <h2 className="trn"> {this.props.track.name}</h2>
<AFavButt/>
</a>
      </div>

    );
  }
}

export default OTrackPart
