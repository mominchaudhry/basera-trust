import React from 'react'

function Shareholders({shareholders, baseUrl}) {
  return (
    <section id="team" className="introduction scrollto secondary-color">
        <div className="row clearfix">
            
            <div className="col-3">
                <div className="section-heading">
                    <h3>{shareholders.title}</h3>
                    <h2 className="section-title">{shareholders.header}</h2>
                    <p className="section-subtitle">
                        {shareholders.description}
                    </p>
                </div>

            </div>

            <div className="shareholders">

                {shareholders?.content &&
                    shareholders.content.map((shareholder, index) => (
                        <div key={index} className="col-2 icon-block icon-top wow fadeInUp teamCard" data-wow-delay="0.1s">
                            <div className="img-icon">
                                <img className='headshot-image' src={shareholder.image} alt={shareholder.name}/>
                            </div>
                            <div className="icon-block-description">
                                <h4>{shareholder.name}</h4>
                                <p>{shareholder.position}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>

        </div>
    </section>
  )
}

export default Shareholders