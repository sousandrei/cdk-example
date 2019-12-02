import cdk from '@aws-cdk/core'
import autoscaling from '@aws-cdk/aws-autoscaling'
import ec2 from '@aws-cdk/aws-ec2'

interface CustomAsgProps extends Partial<autoscaling.AutoScalingGroup> {
  vpc: ec2.Vpc
}

const defaults = {
  instanceType: new ec2.InstanceType('t3a.nano'),
  machineImage: new ec2.AmazonLinuxImage(),
}

export class CustomAsg extends autoscaling.AutoScalingGroup {
  constructor(scope: cdk.Construct, id: string, props: CustomAsgProps) {
    const config = { ...defaults, ...props }

    super(scope, id, config)

    return this
  }
}
