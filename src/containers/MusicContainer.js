import React from 'react';
import MusicList from '../components/MusicList';
import Details from '../components/Details';

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [{
        title: [],
        chartPostition: "one"
      }]
    };
  }
  componentDidMount(){
    console.log('componentDidMount');
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
      .then( response => response.json() )
      .then( songs => this.setState({songs: songs}))
      .catch( err => console.error(err) );
      console.log(songs);
  }

  render(){
    return(
      <div className="songs-box">
        <h2>UK Top 20</h2>
        <MusicList songs={this.state.songs} />
        {/* <Details song={this.state.song} /> */}

      </div>)
  }

}
export default MusicContainer;
