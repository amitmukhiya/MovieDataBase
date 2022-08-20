import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div>
        <footer>
        {/* Footer main */}
        <div className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li><a href="s">Services</a></li>
              <li><a href="s">Portfolio</a></li>
              <li><a href="s">New</a></li>
              <li><a href="s">Latest</a></li>
              <li><a href="s">Careers</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Api</a></li>
              <li><a href="#">Custom</a></li>
            </ul>
          </div>
          <div className="ft-main-item ">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Info</a></li>
              <li><a href="#">Advertise</a></li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Subscribe to MovieDB to get latest news on movies and tv shows.</p>
            <form>
              <input type="email" name="email" placeholder="Enter email address" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
        {/* Footer social */}
        <div className="ft-social">
          <ul className="ft-social-list ">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-github" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#"><i className="fa fa-youtube" /></a></li>
          </ul>
        </div>
        {/* Footer legal */}
        <div className="ft-legal">
          <ul className="ft-legal-list">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>© 2022 Copyright Tech Axis Inc.</li>
          </ul>
        </div>
      </footer>
      </div>
    </>
  );
}
