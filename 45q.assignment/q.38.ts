function describe_city(city: string, country: string = `Pakistan`): void {
     console.log(`${city} is in ${country}`)
}

describe_city(`karachi`)
describe_city(`jaddah`, `saudiarab`)
describe_city(`lahore`, `punjab`)