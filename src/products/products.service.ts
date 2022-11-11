import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(name: string, price: number) {
    const prodId = Math.random().toString(); // prototype ID
    const updatedAt = new Date();
    const newProduct = new Product(prodId, name, price, updatedAt);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    return { ...product };
  }

  updateProduct(productId: string, name: string, price: number) {
    const [product, index] = this.findProduct(productId);
    const updatedProduct = { ...product };
    if (name) {
      updatedProduct.name = name;
    }
    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.updatedAt = new Date();
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return [product, productIndex];
  }
}
