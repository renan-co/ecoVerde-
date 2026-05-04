import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarrinhoController } from '../controllers/carrinho.controller';
import { CarrinhoService } from '../services/carrinho.service';
import { CarrinhoSchema } from '../schemas/carrinho.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Carrinho', schema: CarrinhoSchema }])],
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule {}
