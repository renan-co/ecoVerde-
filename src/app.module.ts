import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './modules/produtos.module';
import { UsuariosModule } from './modules/usuarios.module';
import { CarrinhoModule } from './modules/carrinho.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecoverde'),
    ProdutosModule,
    UsuariosModule,
    CarrinhoModule,
  ],
})
export class AppModule {}
