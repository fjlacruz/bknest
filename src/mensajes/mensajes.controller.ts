import { Controller, Body, Query, Post, Get, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {

    constructor(private mensajesService:MensajesService){

    }

   @Post()
  create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    this.mensajesService.createMensaje(createMensajeDto).then(mensaje=>{
        response.status(HttpStatus.CREATED).json(mensaje);
    })
    .catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }

  /*@Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }*/
  @Get()
  getAll(@Res() response){
    this.mensajesService.getAll().then(mensajeList=>{
        response.status(HttpStatus.OK).json(mensajeList);
    }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }

  @Get(':nick')

  findOne(@Res() response, @Param('nick') nick:string) {
    this.mensajesService.getOneMensaje(nick).then(mensaje=>{
        response.status(HttpStatus.OK).json(mensaje);
    }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }
  


@Get('/id/:id')
    obtener(@Param() params, @Res() response) {
    this.mensajesService.getOneMensajeId(params.id).then(mensaje=>{
        response.status(HttpStatus.OK).json(mensaje);
    }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
    }
@Get('/idUs/:id')
    get(@Param() params, @Res() response) {
    this.mensajesService.getOneMensajeId(params.id).then(mensaje=>{
        response.status(HttpStatus.OK).json(mensaje);
    }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
    }


  @Put(':id')
  update(@Body() updateMensajeDto: CreateMensajeDto,@Res() response, @Param('id') idMensaje) {
    this.mensajesService.updateMensaje(idMensaje, updateMensajeDto).then( mensaje =>{
        response.status(HttpStatus.OK).json(mensaje)
    }).catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }

  @Delete(':id')
  remove(@Res() response, @Param('id') idMensaje) {
    this.mensajesService.deleteMensaje(idMensaje).then(res =>{
        response.status(HttpStatus.OK).json(res);
    }) .catch(()=>{
        response.status(HttpStatus.FORBIDDEN).json({fail});
    });
  }
}
