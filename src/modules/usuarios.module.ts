import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosController } from '../controllers/usuarios.controller';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioSchema } from '../schemas/usuario.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
