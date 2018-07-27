import React from 'react';
import axios from 'axios';
import ShoeList from './ShoeList.jsx'
import ShoeItem from './ShoeItem.jsx'
import ShoeInstagramItem from './ShoeInstagramItem.jsx';
import Arrow from './Arrow.jsx';

const infoStyle = {
  float: 'left',
  width: '35%',
  height: '35%',
  borderWidth: '2px',
  textAlign: 'center'
};

export default class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      insta_stories: [],
      currentInstagramIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.updateCurrentInstagram = this.updateCurrentInstagram.bind(this);
  }

  componentDidMount(){
    this.updateInstagram();
  }

  updateCurrentInstagram(newInstagram) {
    this.setState({currentInstagram:newInstagram});
  }

  getShoes(){
    axios.get('/shoes/shoe')
    .then( (response) => {
      //console.log(response.data);
      this.setState({insta_stories:response.data})
    })
    .catch( (error) => {
      console.log(error);
    });
    }

  updateInstagram(){
    axios.post('/shoes/shoe')
    .then((response) => {
    this.getShoes();
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  previousSlide () {
    const lastIndex = this.state.insta_stories.length - 1;
    const currentImageIndex = this.state.currentInstagramIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentInstagramIndex: index
    });
    //console.log(this.state.currentInstagramIndex);
  }

  nextSlide () {
    const lastIndex = this.state.insta_stories.length - 1;
    const currentImageIndex = this.state.currentInstagramIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentInstagramIndex: index
    });

    //console.log('slice',this.state.insta_stories.slice(this.state.currentInstagramIndex,this.state.currentInstagramIndex+1)[0]);
  }

  render() {
    return (
      <div style={infoStyle}>
        <h3 className='title'> HOW OTHERS ARE WEARING IT </h3>
        <h5 className='subtitle'>Mention @Nike on Instagram for a chance to have your look featured.</h5>
        <ShoeList
          list1={this.state.insta_stories.slice(0,2)}
          list2={this.state.insta_stories.slice(2,4)}
          list3={this.state.insta_stories.slice(4,5)}
          list={this.state.insta_stories}
        />
        <div id="overlay">
          <div className='carousel'>
            <div id='left_arrow'>
              <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />
            </div>
            <ShoeInstagramItem
              item={ this.state.insta_stories.slice(this.state.currentInstagramIndex, this.state.currentInstagramIndex+1) }/>
            <div id='r_arrow'>
              <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
