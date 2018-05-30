import {
  StatusCakeError,
  TestType
} from './sharedTypes'

export interface Test {
  TestID: number,
  Paused: boolean,
  TestType: TestType,
  WebsiteName: string,
  WebsiteURL: string,
  WebsiteHost: string,
  CheckRate: number,
  ContactGroup: Array<string>,
  Public: boolean,
  Status: string,
  TestTags: Array<string>,
  NormalizedResponse: number,
  Uptime: number
}

export async function getTests (StatusCake): Promise<Array<Test> | StatusCakeError> {
  return StatusCake('https://app.statuscake.com/API/Tests/')
}
