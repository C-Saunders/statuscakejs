import * as request from 'request-promise-native'
import { getTests } from './getTests'
import { getTestDetails } from './getTestDetails'
import { getContactGroups } from './getContactGroups'
import { updateTest } from './updateTest'
import { createTest } from './createTest'
import { TestType } from './sharedTypes'
import * as dotenv from 'dotenv'

dotenv.config()

const StatusCake = request.defaults({
  method: 'GET',
  headers: {
    API: process.env.API,
    username: process.env.username
  },
  json: true
})

getTests(StatusCake).then(data => console.log(JSON.stringify(data)))

getTestDetails(StatusCake, 3201442).then(data => console.log(JSON.stringify(data)))

getContactGroups(StatusCake).then(data => console.log(JSON.stringify(data)))

updateTest(StatusCake, {
  TestID: 3201442,
  ContactGroup: '113946',
  CheckRate: 3602
}).then(data => console.log(JSON.stringify(data)))

createTest(StatusCake, {
  CheckRate: 3600,
  TestType: TestType.HTTP,
  WebsiteName: 'Created Example',
  WebsiteURL: 'http://example.com',
  ContactGroup: '113946'
}).then(data => console.log(JSON.stringify(data)))
