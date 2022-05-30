import React from 'react'

function Admissions({admissions}) {
  return (
    <section id="admission" className="introduction scrollto">
    
                <div className="row clearfix">
    
                    <div className="col-3">
                        <div className="section-heading">
                            <h3>{admissions.title}</h3>
                            <h2 className="section-title">{admissions.header}</h2>
                            <p className="section-subtitle">{admissions.description}</p>
                        </div>
                    </div>
    
                    <div className="col-2-3">

                        {admissions.content && admissions.content.map((ad, index) => (
                            <div key={index} className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon">
                                </div>
                                <div className="icon-block-description">
                                    <h4>{ad.header}</h4>
                                    <p>{ad.description}</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
    
                </div>
    
    
            </section>
  )
}

export default Admissions