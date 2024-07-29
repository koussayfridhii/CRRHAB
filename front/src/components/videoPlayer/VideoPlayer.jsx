import React from "react";
import "./VideoPlayer.scss";
const VideoPlayer = ({ id }) => {
  return (
    <iframe
      width={280}
      height={180}
      src={`https://www.youtube.com/embed/${id}?si=KYxoeg2Ghp_Irw0Q`}
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen=""
    />
  );
};

export default VideoPlayer;
// import React, { useRef, useState } from "react";

// const VideoEmbedWithPoster = ({ posterImage }) => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const iframeRef = useRef(null);

//   // Function to handle the playing of the video
//   const handlePlay = () => {
//     setIsVideoPlaying(true);
//   };

//   // Add event listener to iframe to detect when the video is playing
//   React.useEffect(() => {
//     const iframe = iframeRef.current;
//     if (iframe) {
//       const onMessage = (event) => {
//         if (
//           event.origin === "https://www.youtube.com" &&
//           typeof event.data === "string" &&
//           event.data.indexOf("state") !== -1
//         ) {
//           const data = JSON.parse(event.data.replace("state", ""));
//           if (data === 1) {
//             // 1 indicates playing
//             handlePlay();
//           }
//         }
//       };
//       window.addEventListener("message", onMessage);
//       return () => {
//         window.removeEventListener("message", onMessage);
//       };
//     }
//   }, []);

//   return (
//     <div
//       style={{ position: "relative", width: 280, height: 180 }}
//       onClick={() => setIsVideoPlaying(true)}
//     >
//       {/* Conditional rendering of the poster image */}
//       {!isVideoPlaying && (
//         <img
//           src={posterImage} // URL of the poster image
//           alt="Video poster" // Alternative text for the image
//           style={{
//             position: "absolute", // Positioning the image absolutely
//             top: 0, // Aligning to the top
//             left: 0, // Aligning to the left
//             width: "100%", // Setting width to 100%
//             height: "100%", // Setting height to 100%
//             objectFit: "cover", // Ensuring the image covers the container
//             zIndex: 1, // Ensuring the image is above the iframe
//           }}
//         />
//       )}
//       {/* Iframe to embed the YouTube video */}
//       <iframe
//         ref={iframeRef} // Reference to the iframe
//         width={280} // Set the width of the iframe
//         height={180} // Set the height of the iframe
//         src="https://www.youtube.com/embed/JOwsF_5uZMA?si=gf62SzHl0JliXL6O&start=6&enablejsapi=1" // YouTube video URL with start time and enable JS API
//         title="YouTube video player" // Title of the iframe for accessibility
//         frameBorder={0} // Remove the default border of the iframe
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Allow various features in the iframe
//         referrerPolicy="strict-origin-when-cross-origin" // Set the referrer policy
//         allowFullScreen // Allow fullscreen mode
//         style={{
//           position: "absolute", // Positioning the iframe absolutely
//           top: 0, // Aligning to the top
//           left: 0, // Aligning to the left
//         }}
//       />
//     </div>
//   );
// };

// export default VideoEmbedWithPoster;
