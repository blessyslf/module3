import React from "react"
import PropTypes from "prop-types"
class Mcatform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.category.name ? props.category.name : '',

        display_in_navbar: props.category.display_in_navbar ? props.category.display_in_navbar : false
      };
      this.handleNameChange = this.handleNameChange.bind(this);

      this.handleDisplayInNavbarChange = this.handleDisplayInNavbarChange.bind(this);


    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }

    handleDisplayInNavbarChange(e) {
      this.setState({ display_in_navbar: e.target.checked });
    }


    render() {
      const testCheck = this.state.display_in_navbar === true ? '<p>a</p>' : '<p>b</p>';
      return (
        <div>
          <label>Name</label>
          <input
            type="text"
            name="category[name]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />


        
          <input type="submit" value="Create category" />
        </div>
      );
    }
  }

export default Mcatform
