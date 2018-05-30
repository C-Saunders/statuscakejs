import { StatusCakeError } from './sharedTypes'

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

export async function getContactGroups (StatusCake): Promise<Array<ContactGroup> | StatusCakeError> {
  return StatusCake('https://app.statuscake.com/API/ContactGroups/')
}
