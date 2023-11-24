import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateProductsService } from '@modules/products/services/CreateProductsService';

class CreateProductsController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createProductsService = container.resolve(CreateProductsService);

    const created = await createProductsService.execute({
      name,
      price,
      quantity,
    });

    return response.send(created);
  }
}

export { CreateProductsController };
