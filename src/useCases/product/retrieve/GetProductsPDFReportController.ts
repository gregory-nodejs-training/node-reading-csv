import { Request, Response } from "express";
import { ApiUtil } from "../../../utils/ApiUtil";
import { GetProductsPDFReportService } from "./GetProductsPDFReportService";

class GetProductsPDFReportController {

    async handler(request: Request, response: Response) {
        const getProductsPDFReportService = new GetProductsPDFReportService();
    
        const pdfReport = await getProductsPDFReportService.execute();

        if (!pdfReport) {
            return response.status(400).json(ApiUtil.createResponseError("Can't generate PDF!"));
        }

        return response.end(pdfReport);
    }
}

export { GetProductsPDFReportController };