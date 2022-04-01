import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick}>
    Star
  </div>
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { starsSelected: 0 };
    this.change = this.change.bind(this);
  }

  change(starsSelected) {
    this.setState({ starsSelected: starsSelected });
  }

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}

StarRating.propTypes = {
  totalStars: PropTypes.number
};

StarRating.defaultProps = {
  totalStars: 5
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default StarRating
