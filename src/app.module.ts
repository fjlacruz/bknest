import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuariosController } from './usuarios/usuarios.controller';
import { Usuario } from './usuarios/entities/usuario.entity';
import { UsuariosService } from './usuarios/usuarios.service';

import { MensajesController } from './mensajes/mensajes.controller';
import { Mensaje } from './mensajes/entities/mensaje.entity';
import { MensajesService } from './mensajes/mensajes.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sendmeapp_db',
      entities: [Mensaje,Usuario],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje,Usuario])
  ],
  controllers: [AppController, MensajesController, UsuariosController],
  providers: [AppService, MensajesService, UsuariosService],
})
export class AppModule {}
