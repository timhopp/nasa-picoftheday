import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../reducers/index"
import { Photo } from "../features/photos/types"

export default function CurrentFav () {
const photo : Photo = useSelector((state: RootState) => state.favorites.currentFavorite[0])

  return (
<div className="modal" id="exampleModal"  role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Current Favorite</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  )
}