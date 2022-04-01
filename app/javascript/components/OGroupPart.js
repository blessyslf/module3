import React from "react"
import PropTypes from "prop-types"
class OGroupPart extends React.Component {
  render () {
    const groupLink = "groups/"+this.props.group.id
    return (
      <div>
      <a href={groupLink}>
        <p className="catiiiiid">{this.props.group.category_id}</p>
      <img src={this.props.group.image.url} className="grouptimg"/>
              <h2 className="grouptitle">{this.props.group.title}</h2>
              <h1 className="groupname">{this.props.group.name}</h1>
</a>
      </div>

    );
  }
}

export default OGroupPart
