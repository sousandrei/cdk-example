import 'source-map-support/register'
import cdk = require('@aws-cdk/core')

import { SmooothStack } from './stacks/smoooth-stack'

import { regions, accounts } from './constants'

const app = new cdk.App()

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

for (let [regionName, regionValue] of Object.entries(regions)) {
  for (let [accountName, accountNumber] of Object.entries(accounts)) {
    const stackName = `SmooothStack${capitalize(accountName)}${regionName.toUpperCase()}`

    new SmooothStack(app, stackName, {
      env: {
        region: regionValue,
        account: accountNumber,
      },
    })
  }
}
