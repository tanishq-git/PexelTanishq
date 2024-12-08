import React from 'react'
import '../App.css'
import Loader from './Loader'
const Saved = ({saved,loader}) => {
  return (
    // <div className='text-white'>
    //  <a href="/">Saved</a>
    // </div>
    <>
      <div className="container-fluid text-center" id='top'>
        {
          loader | saved.length === 0 ? (
            <Loader/>
          ) : (
            <div className="flex ">
               {saved.map((image) => (
                <div key={image.id} className='items' >
                <img src={image.src.medium} alt="" />
                </div>
         ))}
          </div>
          )
        }
          {/* {saved.length != 0 ?  <a href='#top' className="btn btn-warning mt-5 mb-5">Back to Top</a> : ""} */}
    </div>
    </>
  )
}

export default Saved
