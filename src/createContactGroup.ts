import { StatusCakeError, ContactGroup, ContactGroupCreationOptions } from './sharedTypes'
import { StatusCake } from './StatusCake'

export async function createContactGroup (statusCake: StatusCake, options: ContactGroupCreationOptions): Promise<Array<ContactGroup> | StatusCakeError> {
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
