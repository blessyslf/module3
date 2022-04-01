
import React from "react"
import PropTypes from "prop-types"
import OCategoryPart from "./OCategoryPart.js"
class OAllCategory extends React.Component {
  render () {
    return (

      <div>
        <div className="firstblock">
        {this.props.category.slice(0,3).map(category => (
           <OCategoryPart category={category}/>
        ))}
        </div>


        <div className="secondblock">
        {this.props.category.slice(3,6).map(category => (
           <OCategoryPart category={category}/>
        ))}
        </div>
        <div className="thirdblock">
        {this.props.category.slice(6,9).map(category => (
           <OCategoryPart category={category}/>
        ))}
        </div>
        <div className="fourthblock">
        {this.props.category.slice(9,11).map(category => (
           <OCategoryPart category={category}/>
        ))}
        </div>
      </div>
    );
  }
}

OAllCategory.propTypes = {
  posts: PropTypes.array
};

export default OAllCategory
