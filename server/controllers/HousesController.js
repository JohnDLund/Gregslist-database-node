import BaseController from "../utils/BaseController"
import { houseService } from "../services/HousesService"



export class HousesController extends BaseController {
  constructor() {
    super("api/houses")
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.delete)
  }



  async delete(req, res, next) {
    try {
      await houseService.delete(req.params.id)
      res.send("Deleted!")
    } catch (err) {
      next(err)
    }
  }


  async create(req, res, next) {
    try {
      let rawHouseData = req.body
      let house = await houseService.create(rawHouseData)
      res.send({ data: house, message: "Created the House!" })
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      let houses = await houseService.getAll()
      res.send({ data: houses, message: "Got the Houses!" })
    } catch (err) {
      next(err)
    }
  }


}