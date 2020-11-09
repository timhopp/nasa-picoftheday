import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../reducers/"
import { Photo } from "../features/photos/types"

export const PhotoCom = () => {
const photo : Photo[] = useSelector((state: RootState) => state.currentPhoto.photo)
const status: string = useSelector((state: RootState) => state.currentPhoto.status)

useEffect(() => {
  if(status == 'loading'){
    console.log('hit use effect')
  }

},[status])

  return (
<div>
<h2 className="mt-2">{photo[0].title}</h2>
            <div className="row justify-content-center">
              <img
                className="img mb-5"
                src={photo[0].url}
                alt="Image Not Available"
              ></img>
            </div>
            <p className="mt-3">{photo[0].explanation}</p>
            <p>status { status }</p>
</div>
  )
}
