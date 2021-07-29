import { Request, Response } from "express";
import { ApiUtil } from "../../../utils/ApiUtil";
import { GetAllProductsService } from "./GetAllProductsService";

class GetAllProductsController {
    async handler(request: Request, response: Response) {
        const getAllProductsService = new GetAllProductsService();

        const products = await getAllProductsService.execute();

        if (!products) {
            return response.status(404).json(ApiUtil.createResponseError("Products not found."))
        }

        return response.json(ApiUtil.createResponseData(products));
    }
}

export { GetAllProductsController };