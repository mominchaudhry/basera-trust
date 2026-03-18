import React from 'react'

function Footer() {
  return (
    <footer id="landing-footer" className="secondary-color">
      <div className="row clearfix">
        <p id="copyright" className="col-2">
          Made with love by{' '}
          <strong>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mominchaudhry.com/"
            >
              MOMIN CHAUDHRY
            </a>
          </strong>
        </p>

        <ul className="col-2 social-icons">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              href="https://www.facebook.com/baserashelterhomes"
            >
              <i className="fa fa-facebook fa-1x"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              title="Youtube"
              href="https://www.youtube.com/channel/UCbZZQ-jGAGSDVQTPJnbEGfQ/videos"
            >
              <i className="fa fa-youtube fa-1x"></i>
              <span>Youtube</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              href="https://twitter.com/baseratrust"
            >
              <i className="fa fa-twitter fa-1x"></i>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              href="https://www.instagram.com/basera.islamabad/"
            >
              <i className="fa fa-instagram fa-1x"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              href="https://www.linkedin.com/in/mohammad-fazil-4bb37558/"
            >
              <i className="fa fa-linkedin fa-1x"></i>
              <span>Behance</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="row clearfix footer-verification-row">
        <div className="col-1 footer-verification">
          <div className="footer-verification-card">
            <p>
              <strong>Official domain notice:</strong> Basera Trust owns and
              operates baseratrust.org. This website is the official website of
              Basera Trust and the domain is used for the organization&apos;s
              website, verification, and email services.
            </p>

            <div className="footer-verification-documents">
              <span className="footer-verification-title">
                Verification documents
              </span>
              <a
                className="footer-verification-link"
                target="_blank"
                rel="noreferrer"
                href={`${process.env.PUBLIC_URL}/documents/basera-charity-registration-certificate.pdf`}
              >
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                <span>Charity Registration Certificate (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
