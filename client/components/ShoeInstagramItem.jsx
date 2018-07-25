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


  render() {
    return(
      this.state.item.image_url !== ''?<div>
        <div
          className="white-box">
          <div>
            <img className = 'image_in_box' src={this.state.item.image_url}/>
          </div>
          <div>
            {this.state.item.insta_user}
          </div>
          <h5 id='In_look'> In this Look </h5>
        </div>
      </div>: <div>
        Loading...
      </div>
    );
  }
}

export default ShoeInstagramItem;
