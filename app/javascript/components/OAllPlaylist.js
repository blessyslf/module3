import React from "react"
import PropTypes from "prop-types"
import OPlaylistPart from "./OPlaylistPart.js"
class OAllPlaylist extends React.Component {
  render () {
    return (

      <div>
        <div className="firstttblock">
        {this.props.playlists.slice(0,3).map(track => (
           <OPlaylistPart track={track}/>
        ))}
        </div>

        <div className="secondtttblock">
        {this.props.playlists.slice(3,6).map(track => (
           <OPlaylistPart track={track}/>
        ))}
        </div>

        <div className="thirdtttblock">
        {this.props.playlists.slice(6,9).map(track => (
           <OPlaylistPart track={track}/>
        ))}
        </div>



      </div>

    );
  }
}

OAllPlaylist.propTypes = {
  playlists: PropTypes.array
};

export default OAllPlaylist
