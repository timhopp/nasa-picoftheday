declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    currentPhoto: import("./currentPhotoSlice").PhotoState;
    favorites: import("./favoriteSlice").FavoriteState;
}>, import("redux").AnyAction>;
export default rootReducer;
