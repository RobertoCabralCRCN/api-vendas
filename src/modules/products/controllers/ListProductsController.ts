import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductsService } from '../services/ListProductsService';

class ListProductsController {
  static async handler(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listProductsService = container.resolve(ListProductsService);

    const list = await listProductsService.execute();

    return response.send(list);
  }
}

export { ListProductsController };
