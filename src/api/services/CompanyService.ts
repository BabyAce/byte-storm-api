import { firebaseDb } from '../../config/firebase-connection-db.js';
import { CompanyInterface } from '../interfaces/CompanyInterface.js';
import { CreateCompanyInterface } from '../interfaces/request/CreateCompanyInterface.js'

export class CompanyService {
  public async getAll(): Promise<CompanyInterface[]> {
    try {
      const ref = firebaseDb.collection('company')

      const snapshot = await ref.get()

      const result: CompanyInterface[] = snapshot.docs.map(doc => {
        const { company_name, user_id, country, description } = doc.data()

        const obj: CompanyInterface = {
          company_id: doc.id,
          company_name: company_name,
          user_id: user_id,
          country: country,
          description: description
        }

        return obj
      })

      return Promise.resolve(result)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  public async getById(id: string): Promise<CompanyInterface> {
    try {
      const ref = firebaseDb.collection('company').doc(id)

      const result = await ref.get()

      const data = result.data() as CompanyInterface;

      return Promise.resolve(data)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  public async createCompany(payload: CreateCompanyInterface): Promise<CompanyInterface> {
    try {
      const ref = await firebaseDb
        .collection('company')
        .add(payload)

      const obj: CompanyInterface = {
        company_id: ref.id,
        ...payload
      }

      return Promise.resolve(obj)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  public async updateCompany(payload: CompanyInterface): Promise<CompanyInterface> {
    try {
      const { company_id, ...newPayload } = payload;

      const ref = await firebaseDb
        .collection('company')
        .doc(company_id)

      ref.update(newPayload)

      return Promise.resolve(payload)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  public async deleteCompany(id: string): Promise<CompanyInterface> {
    try {
      const ref = firebaseDb.collection('company').doc(id)

      const result = await ref.get()

      const data = result.data() as CompanyInterface

      ref.delete()

      return Promise.resolve(data)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}