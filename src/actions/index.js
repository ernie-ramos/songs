// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED', // types are mandatory
    payload: song, // payloads are not mandatory
  };
};
