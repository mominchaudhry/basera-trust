import React from "react";

function Donate({ donate }) {
  return (
    <div id="donate" className="row no-padding-bottom clearfix">
      <div className="col-3">
        <blockquote className="testimonial text-right bigtest">
          <q>{donate.quote}</q>
        </blockquote>
      </div>

      <div className="col-3 donate-section">
        <div className="section-heading">
          <h3>{donate.title}</h3>
          <h2 className="section-title">{donate.header}</h2>
          <p className="section-subtitle">{donate.description}</p>
        </div>
        <div className="donate-button">
          <strong>
            <a href="https://i-care-america.org/charity/basera/">Donate Now</a>
          </strong>
        </div>
        <div className="contact-info">
          <p>
            <strong>Head Office:</strong> {donate.head_office}
          </p>
          <br />
          <p>
            <strong>Phone:</strong> {donate.phone}{" "}
          </p>
          <p>
            <strong>Mobile:</strong> {donate.mobile}{" "}
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a href={`mailto:${donate.email}?subject=Donate`}>{donate.email}</a>{" "}
            <br />
          </p>
        </div>
        <br />
        <div className="contact-info">
          <p>
            <strong>WhatsApp</strong>
          </p>
          <p>
            <strong>Pakistan:</strong> {donate.pakistan} <br />
          </p>
          <p>
            <strong>Canada:</strong> {donate.Canada} <strong></strong> <br />
          </p>
          <p>
            <strong>UK:</strong> {donate.UK} <br />
          </p>
        </div>
        <p>
          <strong>NTN:</strong> {donate.NTN}
        </p>
        <h4>
          <strong>Bank Accounts:</strong>
        </h4>
        <hr className="w100" />

        {donate.bank_accounts &&
          donate.bank_accounts.map((bank, index) => (
            <div key={index}>
              <p>
                <strong>{bank.description}</strong>
              </p>
              <p>
                <strong>Bank Name:</strong> {bank.name}{" "}
                <strong>
                  <br />
                  Branch Address:
                </strong>{" "}
                {bank.address} <strong>Account Title:</strong>{" "}
                {bank.account_title} <br />
                <strong>Account No:</strong> {bank.account_number} <br />
                <strong>Currency:</strong> {bank.currency} <br />
                <strong>SWIFT Code: </strong>
                {bank.swift_code} <br />
                <strong>IBAN: </strong>
                {bank.IBAN}
              </p>
              <hr className="w100" />
            </div>
          ))}

        <a
          target="_blank"
          rel="noreferrer"
          href="https://kashfolio.com/Basera/images/Brochure/Basera Trust TriFold-V3.pdf"
          data-videoid="UYJ5IjBRlW8"
          data-videosite="youtube"
          className="button"
        >
          GET OUR BROCHURE
        </a>
      </div>

      <div className="col-3">
        <img src="images/dancer copy.jpg" alt="basera" />
      </div>
    </div>
  );
}

export default Donate;
