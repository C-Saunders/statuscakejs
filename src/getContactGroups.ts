import { StatusCakeError } from './sharedTypes'
import { StatusCake } from './StatusCake'

export interface ContactGroup {
  GroupName: string,
  Emails: Array<string>,
  Mobiles: string,
  Boxcar: string,
  Pushover: string,
  ContactID: number,
  DesktopAlert: string,
  PingURL: string
}

export async function getContactGroups (statusCake: StatusCake): Promise<Array<ContactGroup> | StatusCakeError> {
  return statusCake.request('https://app.statuscake.com/API/ContactGroups/')
}
