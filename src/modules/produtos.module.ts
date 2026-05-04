import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosController } from '../controllers/produtos.controller';
import { ProdutosService } from '../services/produtos.service';
import { ProdutoSchema } from '../schemas/produto.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
