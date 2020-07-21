import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class HousesService {



  async delete(id) {
    return await dbContext.Houses.findByIdAndDelete(id)
  }

  async create(rawHouseData) {
    let house = await dbContext.Houses.create(rawHouseData)
    return house
  }
  async getAll() {
    return await dbContext.Houses.find()
  }








}


export const houseService = new HousesService()