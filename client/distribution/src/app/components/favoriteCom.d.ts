import React from "react";
import { Photo } from "../features/photos/types";
interface favProps {
    fav: Photo;
    removeFavorite: (fav: Photo) => void;
}
declare class Favorite extends React.Component<favProps> {
    constructor(props: favProps);
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Favorite, Pick<React.ClassAttributes<Favorite> & favProps, "ref" | "key" | "fav">>;
export default _default;
