import React from 'react'

function Gallery({images, baseUrl}) {

  return (
      <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery data-featherlight-filter="a">
         <h3 style={{marginBottom:'50px'}}>Gallery</h3>
         {
            images.map((image, index) => (
               <a key={index} href={image.url} data-featherlight="image" className="col-3 wow fadeIn"
                  data-wow-delay="0.1s"><img src={image.url} alt={image.alt}/></a>
            ))
         }
      </aside>
  )
}

export default Gallery