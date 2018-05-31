import {
  StatusCakeError,
  TestCreationOptions,
  TestType
} from './sharedTypes'
import { StatusCake } from './StatusCake'

export interface TestCreateResponse {
  Success: boolean,
  Issues?: object,
  Message: string,
  Data: {
    WebsiteName: string,
    WebsiteURL: string,
    CheckRate: number,
    TestType: TestType,
    ContactGroup: string,
    Client: string
  },
  InsertID: number
}

export async function createTest (statusCake: StatusCake, options: TestCreationOptions): Promise<TestCreateResponse | StatusCakeError> {
  return statusCake.request('https://app.statuscake.com/API/Tests/Update', {
    method: 'PUT',
    form: options
  })
}
