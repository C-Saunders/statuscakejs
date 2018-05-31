import { StatusCakeError } from './sharedTypes'
import { StatusCake } from './StatusCake'

export interface TestDetails {
  CheckRate: number,
  Confirmation: string,
  ContactGroup: string,
  ContactGroups: Array<{
    ID: number,
    ContactID: number,
    CustomHeader: string,
    DNSIP: string,
    DNSServer: string,
    DoNotFind: boolean,
    DownTimes: string,
    Email: string
  }>,
  EnableSSLWarning: boolean,
  FinalEndpoint: string,
  FindString: string,
  FollowRedirect: boolean,
  LastTested: string,
  LogoImage: string,
  Method: string,
  Name: string,
  NextLocation: string,
  NodeLocations: Array<string>
  Paused: boolean,
  PostRaw: string,
  Processing: boolean,
  ProcessingOn: string,
  ProcessingState: string, // actually an enum, but StatusCake does not publish the values
  Sensitive: boolean,
  Status: string,
  StatusCodes: Array<string>
  TestID: number,
  TestType: string,
  Timeout: number,
  TriggerRate: string,
  URI: string,
  Uptime: number,
  UseJar: number,
  WebsiteHost: string,
  WebsiteName: string
}

export async function getTestDetails (statusCake: StatusCake, TestID: number): Promise<TestDetails | StatusCakeError> {
  return statusCake.request('https://app.statuscake.com/API/Tests/Details/', {
    qs: { TestID }
  })
}
