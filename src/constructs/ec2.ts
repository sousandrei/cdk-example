import cdk from '@aws-cdk/core'
import ec2 from '@aws-cdk/aws-ec2'

interface CustomEc2Props extends Partial<ec2.InstanceProps> {
  vpc: ec2.Vpc
}

const defaults = {
  instanceType: new ec2.InstanceType('t3a.nano'),
  machineImage: new ec2.AmazonLinuxImage(),
}

export class CustomEc2 extends ec2.Instance {
  constructor(scope: cdk.Construct, id: string, props: CustomEc2Props) {
    const config = { ...defaults, ...props }

    super(scope, id, config)

    return this
  }
}
