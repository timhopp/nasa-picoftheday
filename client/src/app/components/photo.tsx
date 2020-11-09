import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Photo } from "../features/photos/types"

export default function PhotoCom () {
const photo : Photo = useSelector((state: RootState) => state.currentPhoto.photo[0])

  return (
<div>
<h2 className="mt-2">{photo.title}</h2>
            <div className="row justify-content-center">
              <img
                className="img mb-5"
                src={photo.url}
                alt="Image Not Available"
              ></img>
            </div>
            <p className="mt-3">{photo.explanation}</p>
</div>
  )
}
