import React from "react";
import { Photo } from "../features/photos/types";
interface favoriteProps {
    currentPhoto: Photo;
    favorites: Photo[];
    addFavorite: (currentPhoto: Photo) => void;
}
declare class Favorites extends React.Component<favoriteProps> {
    constructor(props: favoriteProps);
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Favorites, Pick<React.ClassAttributes<Favorites> & favoriteProps, "ref" | "key">>;
export default _default;
