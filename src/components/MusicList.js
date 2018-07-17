import React from 'react';
import Details from './Details.js';


  const MusicList = (props) => {
    const songDetails = this.props.songs.map((song, index) => {

    return (
      <div className="songs-list">{songDetails}

      <Details title={song.title} key={index}>
        <p>Chart Position: {song.chartPostition}</p>
        {/* <p>Running Time: {details.runningTime}</p> */}
        </Details>
         </div>
    );
  });
}


  // function handleChange(event) {
  //   const selectedIndex = event.target.value;
  //   props.onMusicSelected(selectedIndex);
  // }
  //
  // return (
  //   <select id="country-selector" onChange={handleChange} defaultValue="default">
  //     <option disabled value="default">Choose a country...</option>
  //     { options }
  //   </select>
  // )


export default MusicList;
