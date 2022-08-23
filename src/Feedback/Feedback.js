import React from 'react'

function Feedback({feedback}) {
  return (
    <section id="feedback" className="text-center scrollto clearfix">
            <div className="row clearfix">

                <div className="col-1">

                    <div className="section-heading">
                        <h3>{feedback.title}</h3>
                        <h2 className="section-title">{feedback.header}</h2>
                        <p><strong>Phone:</strong> {feedback.phone} </p>
                        <strong>Email :</strong> <a href={`mailto:${feedback.email}?subject=Feedback/Complaints`}>{feedback.email}</a>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Feedback