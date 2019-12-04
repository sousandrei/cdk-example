import * as cdk from '@aws-cdk/core'

import { CustomVpc } from '../../constructs/vpc'
import { CustomEc2 } from '../../constructs/ec2'
import { CustomAsg } from '../../constructs/asg'

export class SmooothStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpc = new CustomVpc(this, 'SmooothVPC')

    new CustomEc2(this, 'SmooothMachine', { vpc })
    new CustomEc2(this, 'SmooothMachine2:TheSequel', { vpc })

    new CustomAsg(this, 'SmooothAsg', { vpc })
  }
}
