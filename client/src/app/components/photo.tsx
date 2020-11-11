import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../reducers/"
import { Photo } from "../features/photos/types"

export const PhotoCom = () => {
const photo : Photo = useSelector((state: RootState) => state.currentPhoto.photo)


  return (
<div>
<h4 className="mt-2">{photo.title}</h4>
            <div className="row justify-content-center">
              <img
                className="img mb-2"
                src={photo.url}
                alt="Image Not Available"
              ></img>
            </div>
            <p className="mt-3">{photo.explanation}</p>
</div>
  )
}
