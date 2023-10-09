import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <Link to="/">
            <h2>Indiatimes</h2>
          </Link>
          <h4>Get the NEWS that fits your groove.</h4>
          <hr className="footer-hr" />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAATCAMAAABLJ7iRAAAC91BMVEVMaXH29/j29/j3+Pj8/P39/v7+/v/+/v78/f38/f34+Pn4+fnz9fX8/f3+/v79/f3////////////+/v77+/vy8/Xt7/H5+vr+///////////7+/z6+vvl6Ov09fb4+fn19/fx8vP7+/z19/f5+fn8/Pzr7u/3+Pn8/f3x8vLw8fL6+/v7+/zk5uf5+vr+/v77+/z6+/v////+///4+fr5+vr5+fr09vf+/v7////t7+/19vbv8PL7+/z+/v/9/f329/fy9fX6+/35+vv7+/v5+vv////6+vr09fXx8/T5+fr39/j5+vv4+fn4+fr5+vr9/f39/v79/v79/f38/Pz9/f3+/v78/Pzu7/D6+/v29vf////19vb73vH97/j96fb99fr++/z9+PT78ejz5dL+/v78/f39/f3+///9/f3////////////////7+/v////+/v7////8/f3////+/v7+V8b9XMH+Tb77oNr//v761cf3pnP6plL9t1f////19vfz9PX4+Pj9/v79/v79/f7////////7+/v/////G7X/Bqr/AKf98/b9nn3/bQ//ggH/nh39/f709fX/Jrf/AKX/Kbb9x+n+8Pf8veD529r+c0n/agX19vb////9/f36+vr/TcH/CKj7pN37ks/9Paz9uLT/XzL/hxL/rUX6+/v5+fn4+fn4+fn/ZMj/F6z9gdD+Mqv/BZf8gcf77e78iYP/Vif/iR3/xof9/v7/////s+X/KrT9OLf9rd//BZ7/AJH+UK/7z9L9ZWD/lSb/2KP5+vv/TsH+CqX/AJn/HZf+tdn87fH8j5//SUz/eCb+tnbu8PL/////m9b/NbT/A6X/AJ//Aoz/S6T7jLz7iKz+UG//QUb/WTH/kmH9/v7/Wcn/C6f/AJP/AoH/DXr/IGr/NFf/SlP/dFz/s5z+/v7+/v7/fMr/N7X/AnL/IWz/R2r/bHj/zs//w+f/X8L/L6/+LKj/Fp7/BJf/DZH+Jo7+Mor/Uo//orUWdUTmAAAA/XRSTlMABCZkpdLq5cebVBQTYrjj+//52U0LGYHo/NxrDQEqLgg/UB5+RwN0tAYFFqsERea4Iv3tNhVxGhi+DRAWmfR+PAIvaLsh8oYKLj4oOTd/iXBkXKBBVdVzD1gg/jKG7f/////jVNqxgdO/9/jz6pXv4PXf9sLR/v///////IHuTBGkzsmcpeGNy+D+/////f+JnVra//////////9I5jJ4qPT///////VvrVx7pmDg/////////9hD18Mlrf////////+ZFV5e/////////9M3NbUYpvj/////////6GWNNvX//////+qGFmyGKYz/8bxoFhVdo9Tv9fTnw4Mw+ZiwfwAABJlJREFUeAG10AN8G38fB/DPXdcGdxctaZOGVV5N2nReVjyoNVRD8Rh/255t27ZtW3WH2jaHS9pZL+19vh++IMAinmnEe0IAoAkLa8Amiih/b4HsCaIVXbhsxAK8Qk1UyPIe4Z107PJ7eC0SMkH10zhoaW7hqfEKHs+W5/xKdIMRL6GowgbT6+eRUFAUnmNHSfEKTo0LJcZL5EytWY0XMAxfweAlmiyaVIP0E+bheS0CgQyvQ6v16ORP+IPFFMhpBiy1SY+npIS+6wv6znn8/qJgD5B1F/Gi5Et9ARBkRKQJCDMC9MBBQnMxJezTGOEDwCdCNERMGgnyysNskTHSaCIHuDS6mdFFourlEWAAMCJCPUyuMfkniK7KSu8lkT3iBw/Bc6KiE5UApDKlUq4O0Cp8TM0qVSGak5XKaLrMBb1saaVS6dUS/2lbW7hKdZxpoXcphw1SafWwOqOSNvbOCkPCCdpwRBrp1l557n/77RsZUs6KwlMfKlgAZBWZcp//iDedsSv5/TKMgFO7wxnbMJNO4KlwuH46919uNx5x9t9Y8QvlbyO5LknJ/r8EVrGzFw9YNoaUmRKObv/+/MbuddzK9fBoXEFKpdKHDy0Roj4Eq7sFgPpeYfUH9l4gPB2c6701/S7xpMuXcY6t8y+X3c4+0SJ3ak/WOsVxq9rPOaojpLxM8T8m6mDlEOx7658Hb/UctfJ77oI4E8flhp9NRMsYBckHT2sGoDFrAEQwDAOL/ObjK9Qu8cgWJku6USuhqAzPLanEEupSUUfCJ8ipOLJWqYhp0R5ILdqfyWxwn67eCKttNScfepp48X/DFX1uS9/1g7nkvyA/n00yDs2NNDCepgkAdjQNuRysh/wE1akSIOP/U1sPMSiOBAp+w29O3EC/jz9+9Ajo0ur/1QfNn1b9t4cOVlINoj/eYMQ+7M+AGqA5FYAHQDIMj2Ci8IhhHCOAGKEQ7MlKP790des+Tr/kVQ+DmFZ0GSP5dEvpf9Z8jU5GIG37xR08n8XT94nx1HxY/AKLBiAYsAZqBuOwNUcgEPgBAgHqu5pHRQE25ZFcJE1O5UCxDwgHkLEHp+r/8zsBiwv3Xc30Z1mjmr4juc026JQHVtq2D1EoHTDl1D9+rQH2XywJJidQ9sgYwg/jg9cn6jBF4a/0b7Cgb4NrdB8TB0dNMszFaMABAthRgr9KVnyjQxCqO7IdPzHP/k9V2qU9dop/6dFJg7WlwMmKeO4tv5z7m3rk28nRZH8JuJ2cMnduaurFE2npGZlZd+7eM8DKuFn4tZc/9f8/u7tAHc+R9wU16+Nu5piDvRNFib2/dkaYQ4hYNNZ87qBELO5tu5QAoLr/lbsPPD4KWWHQeoawvzkfjIRhxRfiT8YA6uwjOXNTL17MTcvLLygsKi5BF9/4zT5QDwp0MgJ+m6M8oNeWuhl8/7gfGzurjE8DCa6xZVp/lddfeLPK3Axg+UeW8o3Qe0Xd9PePjOLF3o/3UAMJw2eVeQHwL6/YfvwiW1FeZVV1TS3eJWzkSF8DLAwjdWAZR7DfryJGjAyDlcFXBwKsOuIprzS8H48BxS59AKnWgzsAAAAASUVORK5CYII=" alt="" />
          <hr className="footer-hr" />
          <div className="footer-left-link">
            <span className="spanText">• Times of India</span>
            <span className="spanText"> • Economic Times</span>
            <span className="spanText"> • Navbharat Times</span>
            <span className="spanText"> • Maharashtra Times</span>
            <span className="spanText"> • Gaana</span>
            <span className="spanText"> • Cricbuzz</span>
            <span className="spanText"> • Romedy Now</span>
          </div>
        </div>
        <div className="footer-middle">
          <div className="quick-link">
            <h3>QUICK LINKS</h3>
            <span className="spanText">• Times of India</span>
            <span className="spanText"> • Economic Times</span>
            <span className="spanText"> • Navbharat Times</span>
            <span className="spanText"> • Maharashtra Times</span>
            <span className="spanText"> • Gaana</span>
            <span className="spanText"> • Cricbuzz</span>
            <span className="spanText"> • Romedy Now</span>
          </div>
          <hr className="footer-hr" />
          <div className="specials">
            <h3>SPECIALS</h3>
            <span className="spanText">• Times of India</span>
            <span className="spanText"> • Economic Times</span>
            <span className="spanText"> • Navbharat Times</span>
            <span className="spanText"> • Maharashtra Times</span>
            <span className="spanText"> • Gaana</span>
            <span className="spanText"> • Cricbuzz</span>
            <span className="spanText"> • Romedy Now</span>
          </div>
          <hr className="footer-hr" />
          <span className="spanText">• About Us</span>
          <span className="spanText"> • Contact Us</span>
          <span className="spanText"> • Terms & Condition</span>
          <span className="spanText"> • Privacy Policy</span>
          <span className="spanText"> • Sitemap</span>
        </div>
        <div className="footer-right">
          <h3>
            Subscribe to Indiatimes Newsletter and get handpicked updates based
            on your interests!
          </h3>
          <form className="footer-email">
            <input
              type="text"
              name="email"
              placeholder="Enter Email ID"
            ></input>
          </form>
          <hr className="footer-hr" />

          <h3>Connect With Us On</h3>
          <div className="social-media-icon">
            <svg className="fb" viewBox="0 0 24 24">
              <path d="M0 0v24h12.781v-9.27H9.657v-3.785h3.124V7.766a4.185 4.185 0 0 1 4.186-4.185h3.266v3.403h-2.337a1.33 1.33 0 0 0-1.33 1.33v2.63h3.608l-.498 3.785h-3.11V24H24V0H0z"></path>
            </svg>
            <svg className="twitter" viewBox="0 0 24 18">
              <path
                d="M0 15.959c.385.041.777.063 1.175.063 2.306 0 4.43-.727 6.115-1.945-2.155-.037-3.973-1.35-4.6-3.156a5.312 5.312 0 0 0 2.224-.078C2.66 10.426.964 8.589.964 6.387V6.33a5.22 5.22 0 0 0 2.23.569c-1.32-.815-2.19-2.206-2.19-3.783 0-.832.243-1.613.667-2.284C4.099 3.58 7.727 5.39 11.82 5.58a4.228 4.228 0 0 1-.128-1.036c0-2.51 2.205-4.544 4.924-4.544 1.416 0 2.696.552 3.594 1.435A10.373 10.373 0 0 0 23.337.332c-.368 1.061-1.148 1.952-2.165 2.514.996-.11 1.945-.354 2.828-.715a9.618 9.618 0 0 1-2.457 2.352c.01.195.014.39.014.588C21.557 11.076 16.605 18 7.547 18 4.768 18 2.18 17.248 0 15.959z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg className="instagram" viewBox="0 0 24 24" fill="none">
              <path
                fill="#fff"
                d="M12 2.162c3.204 0 3.584.012 4.849.07 1.17.054 1.805.249 2.228.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.423.36 1.058.413 2.228.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.228-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.898-.423.164-1.058.36-2.228.413-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.053-1.805-.249-2.228-.413a3.718 3.718 0 0 1-1.38-.898c-.42-.42-.68-.82-.898-1.38-.164-.423-.36-1.058-.413-2.228-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.053-1.17.249-1.805.413-2.228.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.423-.164 1.058-.36 2.228-.413 1.265-.058 1.645-.07 4.849-.07zM12 0C8.74 0 8.332.014 7.052.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 0 0-2.126 1.384A5.882 5.882 0 0 0 .63 4.14c-.297.763-.5 1.635-.558 2.912C.014 8.332 0 8.741 0 12c0 3.26.014 3.668.072 4.948.058 1.277.261 2.15.558 2.912.307.79.717 1.459 1.384 2.126A5.88 5.88 0 0 0 4.14 23.37c.763.297 1.635.5 2.912.558C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.277-.059 2.15-.261 2.912-.558a5.88 5.88 0 0 0 2.126-1.384 5.883 5.883 0 0 0 1.384-2.126c.297-.763.5-1.635.558-2.912.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.059-1.277-.261-2.15-.558-2.912a5.883 5.883 0 0 0-1.384-2.126A5.882 5.882 0 0 0 19.86.63c-.763-.297-1.635-.5-2.912-.558C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
              ></path>
            </svg>
            <svg className="youtube" viewBox="0 0 35 24" fill="none">
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M30.539.717a4.293 4.293 0 0 1 3.031 3.03c.714 2.674.714 8.253.714 8.253s0 5.58-.717 8.252a4.294 4.294 0 0 1-3.03 3.031C27.863 24 17.141 24 17.141 24S6.42 24 3.747 23.283a4.293 4.293 0 0 1-3.031-3.03C0 17.578 0 12 0 12s0-5.58.717-8.252A4.293 4.293 0 0 1 3.747.717C6.422 0 17.143 0 17.143 0S27.864 0 30.54.717zM22.623 12l-8.91-5.142v10.284L22.623 12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="copyright">
        COPYRIGHT © 2020 TIMES INTERNET LIMITED. POWERED BY INDIATIMES LIFESTYLE
        NETWORK. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
