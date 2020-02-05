import { Controller, Body, Query, Post, Get, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario-dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuariosService:UsuariosService){

    }

   @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto, @Res() response) {
    this.usuariosService.createUsuario(createUsuarioDto).then(usuario=>{
        response.status(HttpStatus.CREATED).json(usuario);
    })
    .catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }

  @Post('generate-token')
  generarToken(@Body() createUsuarioDto: CreateUsuarioDto,@Res() response, @Param('username') username:string) {
    this.usuariosService.gerarToken(username).then(usuario=>{
        response.status(HttpStatus.OK).json(usuario);
    })
  ;
  }

  @Get()
  getAll(@Res() response){
    this.usuariosService.getAll().then(usList=>{
        response.status(HttpStatus.OK).json(usList);
    }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }

 




}
