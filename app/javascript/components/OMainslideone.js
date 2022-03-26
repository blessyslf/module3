import React from "react"
import PropTypes from "prop-types"
class OMainslideone extends React.Component {
  render () {
    return (
<img src="/assets/OMainslideone.svg" className="OMainslideone"/>
    );
  }
}
<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
export default OMainslideone
