import {nanoid} from "nanoid";
import Url from "../models/url.model.js";


export const createShortUrl = async (originalUrl) => {
    const shortCode = nanoid(7);
    const url = await Url.create({
        originalUrl,
        shortCode,
        clicks: 0
    })
    return url;
}