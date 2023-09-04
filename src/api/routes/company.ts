import express, { Router, Request, Response } from 'express'
import { CompanyController } from '../controllers/CompanyController.js'

export const companyRouter: Router = express.Router()

const companyController = new CompanyController()


companyRouter.get('/', async (req: Request, res: Response) => {
  await companyController.get(req, res)
});

companyRouter.post('/', async (req: Request, res: Response) => {
  await companyController.add(req, res)
})

companyRouter.put('/', async (req: Request, res: Response) => {
  await companyController.update(req, res)
})

companyRouter
  .route('/:id')
  .get( async (req: Request, res: Response) => {
    await companyController.getById(req, res)
  })
  .delete( async (req: Request, res: Response) => {
    await companyController.delete(req, res)
  })