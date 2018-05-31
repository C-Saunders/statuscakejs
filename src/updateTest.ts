import {
  TestUpdateOptions,
  StatusCakeError
} from './sharedTypes'
import { StatusCake } from './StatusCake'

export interface TestUpdateResponse {
  Issues: Array<any> | object,
  Success: boolean,
  Message: string
}

export async function updateTest (statusCake: StatusCake, options: TestUpdateOptions): Promise<TestUpdateResponse | StatusCakeError> {
  return statusCake.request('https://app.statuscake.com/API/Tests/Update', {
    method: 'PUT',
    form: options
  })
}
