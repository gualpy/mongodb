'use strict'
var carro = require('../models/auto_model');
function pruebas(req,res)
{
    res.status(200).send
    ({
        menssage:'Esta ruta es de prueba en mi api restful con mongo y nodejs'
    });
};
function saveAuto(req, res)
{
    var autos = new carro();

    var params = req.body;
    if(params.marca)
    {
        autos.marca=params.marca;
        autos.modelo = params.modelo;
        autos.color=params.color;
        autos.motor=params.motor;
        //insertando
        autos.save((err,AutoStored)=>{
            if(err)
            {
                res.status(500).send({
                    menssage:'Error en el servidor'
                });
            }else{
                if(AutoStored)
                {
                    res.status(200).send({
                        auto:AutoStored
                    });
                }else{
                    res.status(200).send({
                        menssage:'No se ha guardado el Auto'
                    });
                }
            }
        });
            }else{
        res.status(200).send({
            menssage:'El nombre del auto es obligatorio'
        });
    }
}

module.exports={
    pruebas,
    saveAuto
};