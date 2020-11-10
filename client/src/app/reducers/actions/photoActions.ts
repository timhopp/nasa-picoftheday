import { SET_CURRENT, SET_NEWCURRENT, currentPhotoTypes } from "../types/currentPhoto"
import { Photo } from "../../features/photos/types"


export function setCurrentPhoto(currentPhoto: Photo): currentPhotoTypes {
  return {
    type: SET_CURRENT,
    payload: currentPhoto 
  }
}

export function setNewCurrentPhoto(newCurrentPhoto: Photo): currentPhotoTypes {
  return {
    type: SET_NEWCURRENT,
    payload: newCurrentPhoto
  }
}