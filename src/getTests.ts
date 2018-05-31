import {
  StatusCakeError,
  TestType
} from './sharedTypes'
import { StatusCake } from './StatusCake'

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

export async function getTests (statusCake: StatusCake): Promise<Array<Test> | StatusCakeError> {
  return statusCake.request('https://app.statuscake.com/API/Tests/')
}
