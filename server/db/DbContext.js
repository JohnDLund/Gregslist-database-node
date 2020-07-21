import ValueSchema from "../models/Value";
import CarSchema from "../models/Car";
import HouseSchema from "../models/House"
import mongoose from "mongoose";

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Cars = mongoose.model("Car", CarSchema)
    this.Houses = mongoose.model("House", HouseSchema)
  }
}

export const dbContext = new DbContext();
