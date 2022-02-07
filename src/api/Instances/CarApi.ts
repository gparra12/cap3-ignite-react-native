import api from "../api";

import { AxiosResponse } from "axios";
import { Car } from "../../models/Car";

class CarApi {
  // * GETS para API
  // * GET ALL CARS
  static getAllCars = (): Promise<AxiosResponse<Car>> => {
    return api.get<Car>("/cars");
  };

  // * GET ONE CAR
  static getOneCar = (id: number): Promise<AxiosResponse<Car>> => {
    return api.get<Car>(`/cars/${id}`);
  };

  // * POST para API
  // * POST ONE SCHEDULE
  static postOneSchedule = (car: Car): Promise<AxiosResponse<Car>> => {
    return api.put("/cars", { car: car });
  };
}

export default CarApi;
