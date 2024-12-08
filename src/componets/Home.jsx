import React from 'react'
import Loader from '../componets/Loader';
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = ({images,loader,setSaved,saved}) => {
  const saveimage = (img) => {
    let flag = true;
    if(saved != null && saved.length > 0){
      for(let i =0;i<saved.length;i++){
        if(saved[i].id === img.id){
          flag = false;
          // console.log("image is already exists")
          toast.info('Image already Saved!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
          break;
        }
      }
    }
      if(flag){
        setSaved([...saved,img]);
        // console.log("image saved")
        toast.success('Image Saved!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
        }
    }
 
  return (
    // <div className='text-white'>
    //   <a href="/saved">Home</a>
    // </div>
    <>
    <ToastContainer/>
    <div className="container-fluid text-center" id='top'>
        {
          loader ? (
            <Loader/>
          ) : (
            <div className="flex ">
               {images.map((image) => (
                <div key={image.id} className='items' onClick={() => saveimage(image)}>
            <img src={image.src.medium} alt="" />
                </div>
         ))}
          </div>
          )
        }
          {images.length != 0 ?  <a href='#top' className="btn btn-warning mt-5 mb-5">Back to Top</a> : ""}
    </div>
    </>
  )
}

export default Home
