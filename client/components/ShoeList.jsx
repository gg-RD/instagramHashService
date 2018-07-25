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
      <div className = 'shoes'>
        <table className='table'>
          <tr id='table-row'>
          {this.props.list1.map((i) =>
            <ShoeItem key={i.id} item={i}/>
          )}
          </tr>
          <tr id='table-row' className={!this.state.show_remaining ?'hidden':''}>
          {this.props.list2.map((i) =>
            <ShoeItem key={i.id} item={i}/>
          )}
          </tr>
          <tr id='table-row' className={!this.state.show_remaining ?'hidden':''}>
          {this.props.list3.map((i) =>
            <ShoeItem key={i.id} item={i}/>
          )}
          </tr>
        </table>
        <div className='show-remaining' onClick={() => {
          var newState = !this.state.show_remaining;
          this.setState({show_remaining:newState});
        }}>
          {!this.state.show_remaining ?
            <div>
              <a className='show-remaining_underline'>Load More ({this.props.list2.length +
              this.props.list3.length})</a>
              <a>∨</a>
            </div>
            :
            <div>
              <a className='show-remaining_underline'>Hide</a> <a>∧</a>
            </div>
          }
        </div>
    </div>);
  };

}
