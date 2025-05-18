import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  create(createProductDto: CreateProductDto): Product {
    const product: Product = {
      id: Date.now().toString(),
      ...createProductDto,
    };
    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: CreateProductDto): Product {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products[index] = {
      ...this.products[index],
      ...updateProductDto,
    };
    return this.products[index];
  }

  remove(id: string): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products.splice(index, 1);
  }
} 