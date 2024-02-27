import BottomItem from "./components/BottomItem";
import LoomVideo from "./components/LoomVideos";

export default function Home() {
  return (
    <div className="background">
      <div className="upper-group-wrapper">
        <div className="header-castmate-beta">
          <div className="header-castmate">CastMate</div>
          <button className="header-earlyaccess">Early Access (Beta)</button>
        </div>
        <div className="glass glass-wrapper">
          <p className="castmate">CastMate</p>
          <p className="bring">Bring Your Voice To The Podcast Conversation</p>
          <div className="input-submit-wrapper">
            <input className="input" placeholder="early-access@castmate.ai" />
            <button className="submit-button">Submit</button>
          </div>
          <div className="button-group ">
            <button className="app-store-button"></button>
            <button className="google-play-button"></button>
          </div>
        </div>
        <div className="videos-container">
          <LoomVideo src="https://www.loom.com/embed/c7a82509eaca450c814fae77c5db7a1d?sid=a144558c-7717-431b-81a1-8d8921d34d69" />
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="bottomList" >
          <BottomItem title="Product" >
            <span>Android - Google Play Store</span>
            <span>iOS- App Store</span>
            <span>FAQ</span>
          </BottomItem>
          <BottomItem title="Company" >
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </BottomItem>
          <BottomItem title="Community" >
            <span>Trending Community Casts</span>
          </BottomItem>
        </div>
        <div className="footer-button-group">
          <svg className="footer-x-button"><use href="#svg-twitter" /></svg>
          <svg className="footer-tiktok-button"><use href="#svg-tiktok" /></svg>
        </div>
        <div className="footer-company">&copy;2024 - Usequeryai, Inc</div>
      </div>
    </div >
  );
}
