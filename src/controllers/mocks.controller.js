import MockingService from "../services/mocking.js";
import Pet from "../dao/Pets.dao.js";
import Users from "../dao/Users.dao.js";

const getMascotas = async (req,res)=>{

    const mascotas = await MockingService.generarMockingMascotas(100);
    res.send({status:"success",payload:mascotas})
}

const getUsuarios = async (req,res)=>{
    const usuarios = await MockingService.generarMockingUsuarios(50);
    res.send({status:"success",payload:usuarios})
}

const addUsersAndPets = async (req,res)=>{
    const users=req.query.users||0;
    const pets=req.query.pets||0;
    try {
               
        const usuarios = await MockingService.generarMockingUsuarios(users);
        const mascotas = await MockingService.generarMockingMascotas(pets);

        for(let i=0;i<usuarios.length;i++){
            console.log(usuarios[i]);
            const newUser = new Users();

            await newUser.save(usuarios[i]);
        }

        for(let i=0;i<mascotas.length;i++){
            console.log(mascotas[i]);
            const newPet = new Pet();

            await newPet.save(mascotas[i]);
        }

        res.status(201).send(`${users} usuarios y ${pets} mascotas cargados exitosamente`);
    } catch (error) {
        res.status(500).send("Error del servidorr");
    }
    
}


export default {getMascotas,getUsuarios,addUsersAndPets}