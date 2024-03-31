import React from 'react'
import {ABOUT_CONTENT_TYPE_LIST} from '../App';

function About({about}) {
  return (
    <section id="about" className="introduction scrollto">
        <div className="row clearfix">

            <div className="col-3">
                <div className="section-heading">
                    <h3>{about.title}</h3>
                    <h2 className="section-title">{about.header}</h2>
                    <p className="section-subtitle">{about.description}</p>
                </div>

            </div>

            <div className="col-2-3">

                {about.content && about.content.map((item, index) => (
                    <div key={index} className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                        <div className="icon"/>
                        <div className="icon-block-description">
                            <h4>{item.header}</h4>
                            {
                                item.type === ABOUT_CONTENT_TYPE_LIST ?
                                    <ul>
                                        {item.content.map((li, i) => (
                                            <li key={index}>
                                                {
                                                    li.hyperlink ? <a href={li.hyperlink}>{li.text}</a> : li.text
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                :
                                    <p>{item.content}</p>
                            }
                        </div>
                    </div>
                ))}

            </div>

        </div>
    </section>
  )
}

export default About