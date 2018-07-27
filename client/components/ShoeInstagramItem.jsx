import React from 'react';

class ShoeInstagramItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.item[0].image_url, 'image_url');
    this.setState({ item: nextProps.item[0]});
  }

  OverlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

  render() {
    var time = new Date();
    time = Math.floor((time - this.state.item.created_at*1000)/(1000*3600*24));//time in days
    var unitTime = 'days';
    if(time>7){
      time = Math.floor(time/7);
      unitTime = 'weeks';
      if(time>4){
        time = Math.floor(time/4);
        unitTime = 'months';
        if(time>12){
          time = Math.floor(time/12);
          unitTime = 'years'
        }
      }
    }
    console.log(time, 'new time')
    return(
      this.state.item.image_url !== ''?<div>
        <div
          className="white-box">
            <img className = 'image_in_box' src={this.state.item.image_url}/>
          <div>
            <button type="button" className="close_button" aria-label="Close" onClick={this.OverlayOff}>
              <span aria-hidden="true">&times;</span>
            </button>
            <img id='user_profile_pic' src={this.state.item.user_image_url}/>
            <div id='user_box'>
              <p id='insta_name'> {this.state.item.insta_user} </p>
              <p id='creation_time'>{time} {unitTime} ago </p>
            </div>
          </div>
            <div className='gray_line'>
              <p id='In_look'> In this Look </p>
            </div>
        </div>
      </div>: <div>
        Loading...
      </div>
    );
  }
}

export default ShoeInstagramItem;
