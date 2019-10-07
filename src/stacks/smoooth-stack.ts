import cdk = require('@aws-cdk/core')
import ec2 = require('@aws-cdk/aws-ec2')

export class SmooothStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpc = new ec2.Vpc(this, 'SmooothVPC')

    new ec2.Instance(this, 'SmooothMachine', {
      vpc,
      instanceType: new ec2.InstanceType('t3a.nano'),
      machineImage: new ec2.AmazonLinuxImage(),
    })

    new ec2.Instance(this, 'SmooothMachine2:TheSequel', {
      vpc,
      instanceType: new ec2.InstanceType('t3a.nano'),
      machineImage: new ec2.AmazonLinuxImage(),
    })
  }
}
