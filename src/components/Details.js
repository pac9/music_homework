import React from 'react';

class Details extends React.Component{
  render(){
    return (
      <div className="details">
        <h3 className="song-title">{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Details;
