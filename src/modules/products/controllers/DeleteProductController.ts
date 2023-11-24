import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteProductsService } from '../services/DeleteProductService';

class DeleteProductController {
  static async handler(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const deleteProductService = container.resolve(DeleteProductsService);

    const deleteProduct = await deleteProductService.execute(id);

    return response.send(deleteProduct);
  }
}

export { DeleteProductController };
