import { Response, Request } from "express";
declare const getFavorites: (req: Request, res: Response) => Promise<void>;
declare const addFavorite: (req: Request, res: Response) => Promise<void>;
declare const deleteFavorite: (req: Request, res: Response) => Promise<void>;
declare const deleteAllFavorites: (req: Request, res: Response) => Promise<void>;
export { getFavorites, addFavorite, deleteFavorite, deleteAllFavorites };
