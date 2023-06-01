import { BookInterFace } from "./book-inter-face";

export interface PagenateInterFace {
    totalPages:number,
    docs:BookInterFace[]
}
