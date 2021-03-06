import React, { useEffect } from "react";
import './Components.css';

function SearchResults(props) {
  const { artistInfo } = props;

  const imgStyle = { borderRadius: "50%" };

  return (
    <div>
      <h1>{artistInfo.name}</h1>
      <img src={artistInfo.images[1].url} style={imgStyle}></img>
      <br />
      <button className="btn btn-light" class="btn" onClick={() => props.createPlaylist()}>
        Create Playlist
      </button>
    </div>
  );
}

export default SearchResults;
