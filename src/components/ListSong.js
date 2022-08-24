import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {

  const {DataSongs, handleSetSong, song} = useContext(Songs);
  // console.log(DataSongs); 

  const [idSong, setIdSong] = useState(0)

  const handlePlaySong = (idSong) => {
    setIdSong(idSong)
    handleSetSong(idSong)
  }

  // thay đổi khi + - bài hát 
  useEffect( () => {
    setIdSong(song.id)
  }, [song] )

  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr className="">
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download" />
            </th>
          </tr>
        </thead>

        <tbody className="">
          {DataSongs.map((song, index) => (
            <tr
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-500 hover:text-white ${ idSong === song.id  && 'text-slate-100 bg-slate-500'}`}
              onClick={() => handlePlaySong(song.id)}
              key={index}
            >
              <td className="text-center">{index + 1}</td>
              <td className="">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}

          {/* <tr>
            <td className="text-center">1</td>
            <td className="">Sing me to sleep</td>
            <td className="text-center">Alan Walker</td>
            <td className="text-center">
              <a href="">
                <i className="fa fa-download"></i>
              </a>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
