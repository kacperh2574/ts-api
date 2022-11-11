import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(@Body('name') prodName: string, @Body('price') prodPrice: number) {
    this.productsService.insertProduct(prodName, prodPrice);
    return 'New product created';
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Put(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('name') prodName: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodId, prodName, prodPrice);
    return this.productsService.getSingleProduct(prodId);
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
