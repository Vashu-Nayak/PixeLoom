import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import {enhancedImageAPI} from '../utils/enhanceImageApi'

const Home = () => {
    const [uploadImage, setUploadImage]=useState(null)
    const [enhancedImage, setEnhancedImage]=useState(null)
    const [loading, setLoading]=useState(false)

    const UploadImageHandler= async(file)=>{
        setUploadImage(URL.createObjectURL(file))
        setLoading(true)
        
        try{
            const enhancedURL= await enhancedImageAPI(file)
            setEnhancedImage(enhancedURL)
            setLoading(false)
        }
        catch(error){
            alert("Failed to enhance image. Please try again.")
        }
    }

  return (
    <>
        <ImageUpload UploadImageHandler={UploadImageHandler} />
        <ImagePreview 
            loading={loading} 
            uploaded={uploadImage}
            enhanced={enhancedImage}
         />
    </>
  )
}

export default Home