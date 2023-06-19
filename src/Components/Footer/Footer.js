import React from "react";
import "./footer.css";
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import PodcastsIcon from '@mui/icons-material/Podcasts';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import utube from "";
// import spotify from"../../spotifyf.jpg";
function Footer() {
  return (
    <div className="footer">
      <div className="heading">
        <h1
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.instagram.com/x_ayush01/";
          }}
        >
          {" "}
          Find Us On Instagram
        </h1>
      </div>

      <div className="second">
        <div className="left">
          <div className="lefta">
            <h1>Subscribe To our Youtube Channel </h1>
            <h2>
              {" "}
              We are uploading various action scenes and dialogue scene as a
              Youtube Shorts on our Channel.
            </h2>
            <img
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "https://www.youtube.com/channel/UCALa8l19Ds9OD25DgSd4LpA";
              }}
              style={{ width: "12%", margin: "auto" }}
              src="./images/utube3.jpg"
              alt="youtube"
            />
          </div>

          <div className="leftb">
            <h1>Subscribe To our Spotify Channel </h1>
            <h2>We are providing high class Song Playlists of various types</h2>
            <img
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  "  https://open.spotify.com/collection/playlists/";
              }}
              style={{ width: "7%", marginLeft: "3%", marginTop: "2%" }}
              src="./images/spotifyf.jpg"
              alt="spotifylogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
