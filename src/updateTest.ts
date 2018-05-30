import {
  TestUpdateOptions,
  StatusCakeError
} from './sharedTypes'

export interface TestUpdateResponse {
  Issues: Array<any> | object,
  Success: boolean,
  Message: string
}

export async function updateTest (StatusCake, options: TestUpdateOptions): Promise<TestUpdateResponse | StatusCakeError> {
  return StatusCake('https://app.statuscake.com/API/Tests/Update', {
    method: 'PUT',
    form: options
  })
}
