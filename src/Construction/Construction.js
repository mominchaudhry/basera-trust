import React, { useState } from 'react'

function Construction({content}) {

    const [threshold, setThreshold] = useState(6);
  return (

    <section id="construction" className="introduction scrollto">
        <div className="row clearfix">

            <div className="col-3">
                <div className="section-heading">
                    <h3>{content.title}</h3>
                    <h2 className="section-title">{content.header}</h2>
                    <p className="section-subtitle">{content.description}</p>
                </div>

            </div>

            <div className="col-2-3">

                <aside id="gallery" className="row text-center scrollto clearfix construction-section" data-featherlight-gallery data-featherlight-filter="a">
                        {
                            content.content && content.content.map((image, index) => (
                                index < threshold && <a 
                                    key={index} 
                                    href={image.url} 
                                    data-featherlight="image" 
                                    className="col-3 wow fadeIn update-item"
                                    data-wow-delay="0.1s"
                                >
                                        <img src={image.url} alt={image.caption}/>
                                        <h4>
                                            {image.caption}
                                        </h4>
                                </a>
                            ))
                        }
                </aside>
                <div className='see-more'>
                {// eslint-disable-next-line
                }<a onClick={() => {
                            if (threshold >= content.content.length) {
                                setThreshold(6);
                            } else {
                                setThreshold(content.content.length);
                            }
                        }}
                    >{threshold < content.content?.length ? 'See More' : 'See Less'}</a>
                </div>

            </div>


        </div>
    </section>
    
  )
}

export default Construction