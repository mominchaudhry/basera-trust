import React from 'react'

function Children({children}) {
  return (
    <section id="trust" className="text-center scrollto clearfix secondary-color">
      <div className="row clearfix">
          <div className="col-1">

              <div className="section-heading">
                  <h3>{children.title}</h3>
                  <h2 className="section-title">{children.header}</h2>
                  <p>{children.paragraph1}</p>
                  <p>{children.paragraph2}</p>
                  <p>{children.paragraph3}</p>
              </div>

          </div>
      </div>
    </section>
  )
}

export default Children