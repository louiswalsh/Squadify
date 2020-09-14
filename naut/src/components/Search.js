import React, { useEffect } from "react";
import './Components.css';

function Search(props) {
  const { artist } = props;
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onSearchClick();
    }
  };

  return (
    <div class="form__group field">
          <label for="artistSearch" class="form__label" className="text-center-louis" style={{width: "100%"}}>
            Search for Artist
          </label>
      <input
        type="text"
        class="form__field"
        id="artistSearch"
        value={artist}
        width="50"
        name="artistSearch"
        onChange={(event) => props.searchHandler(event.target.value)}
        onKeyDown={handleKeyDown}
      />

    </div>
  );
}

export default Search;
