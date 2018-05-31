import { StatusCake } from './StatusCake'
import { getTests } from './getTests'
import { getTestDetails } from './getTestDetails'
import { getContactGroups } from './getContactGroups'
import { updateTest } from './updateTest'
import { createTest } from './createTest'
import { TestType } from './sharedTypes'
import * as dotenv from 'dotenv'

dotenv.config()

const statusCake = new StatusCake(process.env.username as string, process.env.API as string)

getTests(statusCake).then(data => console.log(JSON.stringify(data)))

getTestDetails(statusCake, 3201442).then(data => console.log(JSON.stringify(data)))

getContactGroups(statusCake).then(data => console.log(JSON.stringify(data)))

updateTest(statusCake, {
  TestID: 3201442,
  ContactGroup: '113946',
  CheckRate: 3602
}).then(data => console.log(JSON.stringify(data)))

createTest(statusCake, {
  CheckRate: 3600,
  TestType: TestType.HTTP,
  WebsiteName: 'Created Example',
  WebsiteURL: 'http://example.com',
  ContactGroup: '113946'
}).then(data => console.log(JSON.stringify(data)))
