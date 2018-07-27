import React from 'react';

import ShoeItem from './ShoeItem.jsx';


export default class ShoeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_remaining: false,
    };
  }

  render(){
    return(
      <div className = 'flex-container'>
            <div id ='flex-container1'>
            {this.props.list1.map((i) =>
              <ShoeItem key={i.id} item={i} id='article'/>
            )}
          </div>
            <div id={!this.state.show_remaining ?'hidden':'flex-container2'}>
            {this.props.list2.map((i) =>
              <ShoeItem key={i.id} item={i} id='article'/>
            )}
          </div>
            <div id={!this.state.show_remaining ?'hidden':'flex-container3'}>
            {this.props.list3.map((i) =>
              <ShoeItem key={i.id} item={i} id='article'/>
            )}
          </div>
        <div className='show-remaining' onClick={() => {
          var newState = !this.state.show_remaining;
          this.setState({show_remaining:newState});
        }}>
          {!this.state.show_remaining ?
            <div className='show-remaining_underline'>
              <a>Load More ({this.props.list2.length +
              this.props.list3.length})</a><a>∨</a>
            </div>
            :
            <div className='show-remaining_underline'>
              <a>Hide</a> <a>∧</a>
            </div>
          }
        </div>
    </div>);
  };

}
