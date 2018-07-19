import React from 'react';
import axios from 'axios';
import ShoeList from './ShoeList.jsx'
import ShoeItem from './ShoeItem.jsx'

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

  componentDidMount(){
    this.getShoes();
  }

  getShoes(){
    axios.get('/shoes/shoe')
    .then( (response) => {
//      console.log(response.data);
      this.setState({insta_stories:response.data})
    })
    .catch( (error) => {
      console.log(error);
    });
    }

  render() {
  //  console.log(this.state.insta_stories);
    return (
      <div style={infoStyle}>
        <h3 className='title'> HOW OTHERS ARE WEARING IT </h3>
        <h5 className='subtitle'> Mention @Nike on Instagram for a chance to have your look featured </h5>
        <ShoeList list={this.state.insta_stories}/>
      </div>
    );
  }
}
