import * as requestPromise from 'request-promise-native'

export class StatusCake {
  readonly request: typeof requestPromise

  constructor (username: string, apiKey: string) {
    this.request = requestPromise.defaults({
      method: 'GET',
      headers: {
        API: apiKey,
        username: username
      },
      json: true
    })
  }
}
