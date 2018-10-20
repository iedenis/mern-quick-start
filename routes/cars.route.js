import express from "express";
import carController from "../controllers/cars.controller"
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index');
})

//pointer to async function. In case of rendering,
//you have to add a path to the controller function (getAll)
router.get('/cars', carController.getAll);

router.get('/allcars', (req, res) => {
    carController.getAll(req, res);
});

router.post('/addcar', (req, res) => {
    carController.addCar(req, res);
});

router.delete('/deletecar', (req, res) => {
    carController.deleteCar(req, res);
});

export default router;