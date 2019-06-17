import {
  StatusCakeError,
  ContactGroup,
  ContactGroupCreationOptions,
  ContactGroupUpdateOptions,
} from './sharedTypes'
import { StatusCake } from './StatusCake'

export async function createUpdateContactGroup(statusCake: StatusCake, options: ContactGroupCreationOptions | ContactGroupUpdateOptions): Promise<Array<ContactGroup> | StatusCakeError> {
  const optionsClone: any = Object.assign({}, options)

  if (options.Emails) {
    optionsClone.Email = optionsClone.Emails.join(',')
    delete optionsClone.Emails
  }

  return statusCake.request('https://app.statuscake.com/API/ContactGroups/Update', {
    method: 'PUT',
    form: optionsClone
  })
}
