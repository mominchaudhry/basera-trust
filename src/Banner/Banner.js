import React, { useState } from 'react'

function Banner({banner}) {

    const [open, setOpen] = useState(false);

  return (
    <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
        
      <div id="header">
          <div className="row clearfix">
              <div className="col-1">

                  <div id="logo">

                    <img src="images/logo.png" alt="Landing Page" width="138" height="149" id="banner-logo"/>

                      <img src="images/logo-2.png" alt="Landing Page" width="60" height="65" id="navigation-logo"/>

                  </div>

                  <aside>

                      <ul className="social-icons">
                          <li>
                              <a target="_blank" rel="noreferrer" title="Facebook" href="https://www.facebook.com/baserashelterhomes">
                                  <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                              </a>
                          </li>
                          <li>
                              <a target="_blank" rel="noreferrer" title="Youtube" href="https://www.youtube.com/channel/UCbZZQ-jGAGSDVQTPJnbEGfQ/videos">
                                  <i className="fa fa-youtube fa-1x"></i><span>Youtube</span>
                              </a>
                          </li>
                          <li>
                              <a target="_blank" rel="noreferrer" title="Twitter" href="https://twitter.com/baseratrust">
                                  <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                              </a>
                          </li>
                          <li>
                              <a target="_blank" rel="noreferrer" title="Instagram" href="https://www.instagram.com/basera.islamabad/">
                                  <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                              </a>
                          </li>
                          <li>
                              <a target="_blank" rel="noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/mohammad-fazil-4bb37558/">
                                  <i className="fa fa-linkedin fa-1x"></i><span>Behance</span>
                              </a>
                          </li>
                      </ul>

                  </aside>

                <nav id="nav-main">
                      <ul>
                          <li>
                              <a href="#about"><strong>About</strong></a>
                          </li>
                          <li>
                              <a href="#team"><strong>Team</strong></a>
                          </li>
                          <li>
                              <a href="#gallery"><strong>Gallery</strong></a>
                          </li>
                          <li>
                              <a href="#admission"><strong>Admissions</strong></a>
                          </li>
                          <li>
                              <a href="#trust"><strong>TRUST</strong></a>
                          </li>
                          <li>
                              <a href="#donate"><strong>DONATE</strong></a>
                          </li>
                          <li>
                              <a href="#feedback"><strong>FEEDBACK</strong></a>
                          </li>
                      </ul>
                  </nav>
                   
                  <div id="nav-trigger"><span className={open ? 'open' : ''} onClick={ () => {
                      setOpen(!open)
                  }
                  }></span></div>
                  <nav id="nav-mobile">
                    <ul className={open ? 'expanded' : ''} style={{display: open ? "block" : "none"}}>
                          <li>
                              <a href="#about"><strong>About</strong></a>
                          </li>
                          <li>
                              <a href="#team"><strong>Team</strong></a>
                          </li>
                          <li>
                              <a href="#gallery"><strong>Gallery</strong></a>
                          </li>
                          <li>
                              <a href="#admission"><strong>Admissions</strong></a>
                          </li>
                          <li>
                              <a href="#trust"><strong>TRUST</strong></a>
                          </li>
                          <li>
                              <a href="#donate"><strong>DONATE</strong></a>
                          </li>
                          <li>
                              <a href="#feedback"><strong>FEEDBACK</strong></a>
                          </li>
                      </ul>
                  </nav>

              </div>
          </div>
      </div>

      <div id="banner-content" className="row clearfix">

          <div className="col-38">
<img src="images/logo-2.png" id="navigation-logo" alt="Landing Page"/>
              <div className="section-heading">
                  <h1>{banner.title}&nbsp;</h1>
                  <h2>{banner.subtitle}</h2>
              </div>

              <a href="#donate" className="button">{banner.button}</a>

          </div>

      </div>
  </header>
  )
}

export default Banner