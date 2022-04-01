import React from "react"
import PropTypes from "prop-types"
class OPlaylistPart extends React.Component {
  render () {
    const playlistLink = this.props.track.content
    return (
      <div>
      <a href={playlistLink} target="_blank">
        <p className="catiddd">{this.props.track.category_id}</p>
      <img src={this.props.track.image.url} className="playlistimg"/>
        <h2 className="playlistitle">{this.props.track.name}</h2>
</a>
      </div>

    );
  }
}

export default OPlaylistPart
