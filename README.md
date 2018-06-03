# A StatusCake API Library

Functions and type definitions to make it easier to work with the [StatusCake](https://www.statuscake.com/) API.

## Example of Use

```typescript
import { StatusCake, getTests, Test } from 'statuscakejs'

const statusCake = new StatusCake(<username>, <API key>)

getTests(statusCake)
.then((data: Array<Test>) => console.log(JSON.stringify(data)))
// [{"TestID":3208271,"Paused":false,"TestType":"HTTP", ...
```

See src/demo.ts for more examples.

See the [StatusCake API Documentation](https://www.statuscake.com/api/) for details about fields.

## Installation

`npm i statuscakejs`
