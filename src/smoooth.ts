import 'source-map-support/register'
import cdk = require('@aws-cdk/core')

import { SmooothStack } from './stacks/smoooth-stack'

const app = new cdk.App()

new SmooothStack(app, 'SmooothStack')
