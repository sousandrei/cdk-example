import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'

interface CustomVpcProps extends Partial<ec2.VpcProps> {}

const defaults = {
  enableDnsHostnames: true,
  enableDnsSupport: true,
}

export class CustomVpc extends ec2.Vpc {
  constructor(scope: cdk.Construct, id: string, props?: CustomVpcProps) {
    const config = { ...defaults, ...props }

    super(scope, id, config)

    return this
  }
}
