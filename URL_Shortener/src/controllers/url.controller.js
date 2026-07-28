import { createUrlSchema } from "../validators/url.validator.js";
import { createShortUrl as createShortUrlService } from "../services/url.service.js";

export const createShortUrl = async(req,res,next) => {
    try{
        const validateData = createUrlSchema.parse(req.body);
        const url = await createShortUrlService(validateData.originalURL);
        res.status(201).json({
            success: true,
            message: "Short URL created successfully",
            data: url
        })
    } catch(error) {
        next(error);
    }
}