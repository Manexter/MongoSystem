import { Router } from "express";
import { createAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";
import { createAsignaturas, deleteAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";
import { createProfesores, deleteProfesores, renderEditProfesores, renderProfesores, statusProfesores, updateProfesores } from "../controllers/profesorController";

const router = Router();

router.get("/agregarAlumno", renderAlumnos );

router.get("/agregarAsignatura", renderAsignaturas);

router.get("/agregarProfesor", renderProfesores );

router.post("/asignatura/agregar", createAsignaturas);

router.post("/alumno/agregar", createAlumnos );

router.post("/profesor/agregar", createProfesores );

router.get("/updateAlumnos/:id", renderEditAlumnos );

router.get("/updateAsignaturas/:id", renderEditAsignaturas );

router.get("/updateProfesores/:id", renderEditProfesores );

router.post("/updateAlumnos/:id", updateAlumnos );

router.post("/updateAsignaturas/:id", updateAsignaturas );

router.post("/updateProfesores/:id", updateProfesores );

router.get("/deleteAsignaturas/:id", deleteAsignaturas );

router.get("/deleteAlumnos/:id", deleteAlumnos );

router.get("/deleteProfesores/:id", deleteProfesores );
//nuevo cambio
router.get("/statusAsignaturas/:id", statusAsignaturas );

//nuevo cambio
router.get("/statusAlumnos/:id", statusAlumnos );

//nuevo cambio
router.get("/statusProfesores/:id", statusProfesores );


export default router;