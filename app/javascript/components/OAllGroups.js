import React from "react"
import PropTypes from "prop-types"
import OGroupPart from "./OGroupPart.js"
class OAllGroups extends React.Component {
  render () {
    return (

      <div>

        <div className="fffirstbloock">
        {this.props.groups.slice(0,1).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>

        <div className="sssecondblock">
        {this.props.groups.slice(1,2).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>

        <div className="ttthirdblock">
        {this.props.groups.slice(2,3).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>

        <div className="fffourthblock">
        {this.props.groups.slice(3,5).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>
        <div className="fffifthblock">
        {this.props.groups.slice(6,7).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>
        <div className="sssixblock">
        {this.props.groups.slice(7,9).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>

        <div className="sevenblock">
        {this.props.groups.slice(9,10).map(group => (
           <OGroupPart group={group}/>
        ))}
        </div>


      </div>

    );
  }
}

OAllGroups.propTypes = {
  posts: PropTypes.array
};

export default OAllGroups
