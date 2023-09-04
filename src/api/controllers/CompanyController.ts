import { Request, Response } from 'express';
import { CompanyService }  from '../services/CompanyService.js'

export class CompanyController {
  private companyService: CompanyService

  constructor() {
    this.companyService = new CompanyService()
  }

  public async get(req: Request, res: Response) {
    try {
      const result = await this.companyService.getAll()

      return res.json(result)
    } catch (err) {
      return res.status(500).send({ err: 'An error occured' })
    }
  }

  public async getById(req: Request, res: Response) {
    try {
      const result = await this.companyService.getById(req.params.id)

      return res.json(result)
    } catch (err) {
      return res.status(500).send({ err: 'An error occured' })
    }
  }

  public async add(req: Request, res: Response) {
    try {
      const result = await this.companyService.createCompany(req.body)

      return res.json(result)
    } catch (err) {
      return res.status(500).send({ err: 'An error occured' })
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const result = await this.companyService.updateCompany(req.body)

      return res.json(result)
    } catch (err) {
      return res.status(500).send({ err: 'An error occured' })
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const result = await this.companyService.deleteCompany(req.params.id)

      return res.json(result)
    } catch (err) {
      return res.status(200).send({ err: 'An error occured' })
    }
  }
}