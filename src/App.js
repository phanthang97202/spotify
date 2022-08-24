import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Playing from "./components/Playing";
// inport danh sách bài hát vào cha
import {Songs} from "./Context"
import DataSongs from "./data/songs.json"

import { useState } from "react";
function App() {

  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong);
    if(!song){
      setSong(DataSongs[0])
    }else{
      setSong(song);
    }
  }
  return (
    <div className="App">
      {/* // useCOntext để tất cả thằng con có thể sử dụng mà không bảo trải qua các cầu trung gian  */}

      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSong />
          <ListSong />
        </div>

        <Playing  />
      </Songs.Provider>
    </div>
  );
}

export default App;
