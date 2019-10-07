# AWS-CDK Typescript Example

### Usage

You'll need `aws-cli` and valid credentials to an aws account to use this project.

For more information:

- [Installing the AWS CLI
  ](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- [Configuring the AWS CLI
  ](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### Commands

```bash
yarn build # Builds the package
yarn watch # Builds watching for changes
yarn clean # Cleans the builds


yarn deploy # Deploy all stacks to AWS, you can pass a name to deploy only one stack
yarn destroy # Destroy all stacks from aws, you can pass a name to destroy only one stack
yarn diff # Shows the diff between deployed stack and local code
yarn synth # Generates the cdk.out files, those being the stack ready for deployment
```
