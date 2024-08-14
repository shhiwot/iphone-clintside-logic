
// url request to fetch data from the back end of youtube using youtube api integration 

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=[CHANNEL_ID]&maxResults=8&order=date&key=[YOUR_API_KEY] 

//Apple CHANNEL_ID=UCE_M8A5yxnLfW0KghEeajjw
//API_KEY=AIzaSyDyXH_nhx3jJViVzBrRNaf6-T54cFQwiBk

  //  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDyXH_nhx3jJViVzBrRNaf6-T54cFQwiBk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8";


import React, { useEffect, useState } from "react";
import "./youtub.css"

export default function Youtube() {
  const [Youtubedata, setYoutubedata] = useState([]);
  useEffect(() => {
    fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDyXH_nhx3jJViVzBrRNaf6-T54cFQwiBk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setYoutubedata(data.items);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, []);
  console.log(Youtubedata);
  return (
    <>
      <h1 className="text-center">
        <b>Latest Videos</b>
      </h1>
      <div className="Externalvedio_wrapper container-fluid row">
        {Youtubedata.map((eachVeidos) => {
          let vidId = eachVeidos.id.videoId;
          let VidLink = `https://www.youtube.com/watch?v=${vidId}`;
          return (
            <div className="col-sm-12 col-md-6" key={vidId}>
              <div className="Single-VedioWrapper ">
                <div className="Video-Thumbnail">
                  <a href={VidLink} target="blank">
                    <img
                      src={eachVeidos.snippet.thumbnails.high.url}
                      alt=""
                      srcset=""
                    />
                  </a>
                </div>
                <div className="Vedio-InfoWrapper">
                  <div className="titleWrapper">
                    <a href={VidLink}>{eachVeidos.snippet.title}</a>
                  </div>
                  <div className="DescriptionWrapper">
                    <p> {eachVeidos.snippet.description}</p>
                  </div>
                  <div className="DescriptionWrapper">
                    {eachVeidos.snippet.publishedAt}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
    

}
//to format a date

// function DateFormatter(dateTimeString) {
//   let date = new Date(dateTimeString);
//   let Year = date.getFullYear();
//   let Month = date.getMonth();
//   let Day = date.getDate();
//   let formattedDate =
//     Year +
//     "-" +
//     (Month + 1).toString().padStart(2, "0") +
//     "-" +
//     Day.toString().padStart(2, "0");
//   return formattedDate;
// }