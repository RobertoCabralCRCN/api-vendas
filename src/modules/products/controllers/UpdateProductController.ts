import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { UpdateProductsService } from '../services/UpdateProductService';

class UpdateProductController {
  static async handler(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;
    const updateProductsService = container.resolve(UpdateProductsService);

    const updatedProduct = await updateProductsService.execute({
      name,
      price,
      quantity,
      id,
    });

    return response.send(updatedProduct);
  }
}

export { UpdateProductController };
