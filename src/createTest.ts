import {
  StatusCakeError,
  TestCreationOptions,
  TestType
} from './sharedTypes'

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

export async function createTest (StatusCake, options: TestCreationOptions): Promise<TestCreateResponse | StatusCakeError> {
  return StatusCake('https://app.statuscake.com/API/Tests/Update', {
    method: 'PUT',
    form: options
  })
}
