import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getRepository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario-dto';


@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
      ) {}

      async createUsuario(usuariojeNuevo: CreateUsuarioDto): Promise<Usuario> {
        const nuevo = new Usuario();
        nuevo.firstName = usuariojeNuevo.firstName;
        nuevo.lastName = usuariojeNuevo.lastName;
        nuevo.username = usuariojeNuevo.username;
        nuevo.salary = usuariojeNuevo.salary;
        nuevo.age = usuariojeNuevo.age;

        return this.usuarioRepository.save(nuevo);

    }
   
    async getAll() {   
      const result = await getRepository(Usuario)
     .createQueryBuilder("usuario")
     .getMany();

     const status = 200
     const message = 'User list fetched successfully.'
     return {status,message,result}
     //return await this.usuarioRepository.find();
      }

 
   
    async gerarToken1(username:string){
      
        const usu = await getRepository(Usuario)
        .createQueryBuilder("usuario")
        .where("usuario.username = :username", { username: username })
        .getOne();
        return {usu}
        


//const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
//return await this.mensajeRepository.save(mensajeUpdate)

    }
  
   async gerarToken(username:string): Promise<Usuario[]> {

          return await this.usuarioRepository.find({
            select: ["firstName"],
            where: [{ "username": username }]
        });
      }

  


}
