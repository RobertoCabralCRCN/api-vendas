import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetByProductService } from '../services/GetByProductService';

class GetByProductController {
  static async handler(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const getByProductService = container.resolve(GetByProductService);

    const findProduct = await getByProductService.execute(id);

    return response.send(findProduct);
  }
}

export { GetByProductController };
