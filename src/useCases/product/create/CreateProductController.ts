import { Request, Response } from "express";
import { ApiUtil } from "../../../utils/ApiUtil";
import { CreateProductService } from "./CreateProductService";

class CreateProductController {
    async handler(request: Request, response: Response) {
        const productService = new CreateProductService();
        const { file } = request;
        if (!file) {
            return response.status(400).json(
                ApiUtil.createResponseError('Need to attach some file!')
            );
        }
        const { buffer } = file;
        const products = await productService.execute(buffer);

        return response.json(ApiUtil.createResponseData(products));
    }
}

export { CreateProductController };