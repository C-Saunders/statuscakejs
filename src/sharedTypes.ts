export interface BaseTestOptions {
  BasicPass?: string,
  BasicUser?: string,
  Branding?: number,
  CheckRate?: number,
  Confirmation?: number,
  ContactGroup?: string, // comma separated string of IDs, sets (not adds to) the list
  CustomHeader?: string,
  DoNotFind?: number,
  EnableSSLWarning?: number,
  FinalEndponumber?: string,
  FindString?: string,
  FollowRedirect?: number,
  LogoImage?: string,
  NodeLocations?: string,
  Paused?: number,
  PingURL?: string,
  Port?: number,
  PostRaw?: string,
  Public?: number,
  RealBrowser?: number,
  StatusCodes?: string,
  TestTags?: string,
  TestType?: TestType,
  Timeout?: number,
  TriggerRate?: number,
  UseJar?: number,
  UserAgent?: string,
  Virus?: VirusCheck,
  WebsiteHost?: string,
  WebsiteName?: string,
  WebsiteURL?: string
}

export interface TestCreationOptions extends BaseTestOptions {
  CheckRate: number
  TestType: TestType
  WebsiteName: string
  WebsiteURL: string
}

export interface TestUpdateOptions extends BaseTestOptions {
  TestID: number
}

export interface StatusCakeError {
  ErrNo: number,
  Error: string
}

export enum TestType {
  HTTP = 'HTTP',
  TCP = 'TCP',
  PING = 'PING'
}

export enum VirusCheck {
  ON = 1,
  OFF = 0
}
