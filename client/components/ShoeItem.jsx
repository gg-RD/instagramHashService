import React from 'react';

export default class ShoeItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      is_hovered: false
    };
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(){
    this.setState({
      is_hovered: !this.state.is_hovered
    });
  }

  render(){
    return(
      <td className='shoe-item' id='table-row' height='100'>
        <div>
          <div className={this.state.is_hovered? 'div2' : 'div3'}  >
            {this.state.is_hovered? 'Shop the look' : ''}
          </div>
          <img src={this.props.item.image_url} className='image_shoe'
            onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
          />
        </div>
          <p className='insta_user'>{this.props.item.insta_user}</p>
          <p className='likes'>{this.props.item.likes} Likes</p>
      </td>
      );
  }

};
