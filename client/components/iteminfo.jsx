import React from 'react';
import axios from 'axios';

const infoStyle = {
  float: 'left',
  width: '50%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'center'
};

export default class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      insta_stories: [],
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   let newBid = this.state.currentBid + 1;
  //   let item = Object.assign({}, this.state.item);
  //   item.price = newBid;
  //   this.setState({
  //     currentBid: newBid,
  //     item: item
  //   });
  // }

  getShoes(){
    axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }

  render() {

    return (
      <div style={infoStyle}>
        <h3 font="NimbusSanL-Regu"> HOW OTHERS ARE WEARING IT </h3>
        <h5> Mention @Nike on Instagram for a chance to have your look featured </h5>
        <shoeList list={this.state.insta_stories}/>
      </div>
    );
  }
}
