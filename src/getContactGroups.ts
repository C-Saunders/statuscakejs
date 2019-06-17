import { StatusCakeError, ContactGroup } from './sharedTypes'
import { StatusCake } from './StatusCake'

export async function getContactGroups (statusCake: StatusCake): Promise<Array<ContactGroup> | StatusCakeError> {
  return statusCake.request('https://app.statuscake.com/API/ContactGroups/')
}
