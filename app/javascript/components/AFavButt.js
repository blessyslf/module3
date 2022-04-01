import React from "react"
import PropTypes from "prop-types"

const imageSrc ={
  fill: '/assets/Abuttonfield.svg',
  unfill: '/assets/Abuttonunfield.svg'
}

class AFavButt extends React.Component {


  constructor(props) {
      super(props);
      this.state={
        favorites_count: this.props.favorites ? this.props.favorites.length : 0,
        pre_favorite: this.props.favorites ? this.props.favorites.find((element, index, array) => {return element.user_id ==this.props.current_user_id}) : null,
      }
}




  handleClick = () => {

let requestOption = {method: ''}
if(this.state.pre_favorite) {
  requestOption.method = 'delete';
  this.setState({
    favorites_count:  this.state.favorites_count-1
  });
}
  else {requestOption .method = 'post';
  this.setState({
    favorites_count:  this.state.favorites_count+1
  });
}

let requestUrl = "/posts/"+this.props.post.id+"/favorites";
if(this.state.pre_favorite) requestUrl+="/"+this.state.pre_favorite.id;



  fetch(requestUrl, requestOption).then((response) => {
    return response.json();
  }).then((result) => {
    this.setState({
      pre_favorite: result})
  });
}

getImg = () => this.state.pre_favorite ? imageSrc.fill : imageSrc.unfill


  render () {

    return (
      <div className="Favoritee_button">
        <button onClick={

          () => {
            this.handleClick();
          }

        }><img src={this.getImg()}/></button>
      </div>
    );

  }
}


export default AFavButt
