import Car from '../models/cars.model'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const cars = await Car.getAll();
        res.send(cars);
    }
    catch(err) {
        res.send('Got error in getAll');
    }
}

controller.addCar = async (req, res) => {
    let carToAdd = Car({
        name: req.body.name
    });
    try {
        const savedCar = await Car.addCar(carToAdd);
        res.send('added: ' + savedCar);
    }
    catch(err) {
        res.send('Got error in getAll');
    }
}

controller.deleteCar = async (req, res) => {
    let carName = req.body.name;
    try{
        const removedCar = await Car.removeCar(carName);
        res.send('Car successfully deleted');
    }
    catch(err) {
        res.send('Delete failed..!');
    }
}

export default controller;