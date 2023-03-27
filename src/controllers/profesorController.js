import Profesores from "../models/Profesores";

export const renderProfesores = async (req,res) => {
    const profesores = await Profesores.find().lean();
    res.render("profesorView", {profesores: profesores});
};

export const createProfesores = async (req,res) =>{
    try{
        const profesores = Profesores(req.body);
        await profesores.save();
        res.redirect("/agregarProfesor");
    } catch (error) {
        console.log(error);
    }
};

export const renderEditProfesores = async(req,res) => {
    try{
        const profesores = await Profesores.findById(req.params.id).lean();
        res.render("editarProfesor", {profesores});
    }catch(error){
        console.log(error.message);
    }
};

export const updateProfesores = async(req,res) => {
    const {id} = req.params;
    await Profesores.findByIdAndUpdate(id, req.body);
    res.redirect("/agregarProfesor");
};

export const deleteProfesores = async(req,res) => {
    const {id} = req.params;
    await Profesores.findByIdAndDelete(id, req.body);
    res.redirect("/agregarProfesor");
};

export const statusProfesores = async(req,res) => {
    const {id} = req.params;
    const profesores = await Profesores.findById(id);
    //opcion esta en el Model
    profesores.opcion = !profesores.opcion;
    await profesores.save();
    res.redirect("/agregarProfesor");
};