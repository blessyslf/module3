import React from "react"
import PropTypes from "prop-types"
import OTrackPart from "./OTrackPart.js"
class OAllTracks extends React.Component {
  render () {
    return (

      <div>
        <div className="firsttblock">
        {this.props.tracks.slice(0,3).map(track => (
           <OTrackPart track={track}/>
        ))}
        </div>

        <div className="secondtblock">
        {this.props.tracks.slice(3,6).map(track => (
           <OTrackPart track={track}/>
        ))}
        </div>

        <div className="thirdtblock">
        {this.props.tracks.slice(6,9).map(track => (
           <OTrackPart track={track}/>
        ))}
        </div>



      </div>

    );
  }
}

OAllTracks.propTypes = {
  posts: PropTypes.array
};

export default OAllTracks
