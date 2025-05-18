import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto): Product {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto): Product {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.productsService.remove(id);
  }
} 