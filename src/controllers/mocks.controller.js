import MockingService from "../services/mocking.js";
import Pet from "../dao/Pets.dao.js";


const getMascotas = async (req,res)=>{

    const mascotas = await MockingService.generarMockingMascotas(100);
    res.send({status:"success",payload:mascotas})
}

const getUsuarios = async (req,res)=>{
    const usuarios = await MockingService.generarMockingUsuarios(50);
    res.send({status:"success",payload:usuarios})
}

const addUsersAndPets = async (req,res)=>{
    //const users=req.params.users;
    try {
        const pets=8;
        //const usuarios = await MockingService.generarMockingUsuarios(users);
        const mascotas = await MockingService.generarMockingMascotas(pets);

        

        //  mascotas.map(async (mascota)=>{await Pet.save(mascota)});

        for(let i=0;i<mascotas.length;i++){
            console.log(mascotas[i]);
            await Pet.save(mascotas[i]);
        }

        res.status(201).send(mascotas);
    } catch (error) {
        res.status(500).send("Error del servidorr");
    }
    
}


export default {getMascotas,getUsuarios,addUsersAndPets}