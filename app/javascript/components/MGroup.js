import React from "react"
import PropTypes from "prop-types"
import AFavouritebutton from './AFavouritebutton'
import ARateStarsles from './ARateStarsles'
import AGroupZay from './AGroupZay'
import AGroupRate from './AGroupRate'
import AGroupbutt from './AGroupbutt'
class MGroup extends React.Component {
  render () {
    return (
      <div>
        <p className="catiddd">{this.props.group.category_id}</p>
        <h1 className="grouppptitle">{this.props.group.title}</h1>
          <h2 className="nnaammeegroup">{this.props.group.name}</h2>
        <p className="grouppptext" dangerouslySetInnerHTML={{__html: this.props.group.content}} />
              <img src={this.props.group.image.url} className="grouppimg"/>
<AGroupZay/>
<AGroupRate/>
<AGroupbutt/>
<h1 className="groupppatitle">{'видео'}</h1>
      </div>
    );
  }
}

export default MGroup
