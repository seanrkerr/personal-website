---
title: "What is a CDK Stack?"
author: "Sean Kerr"
category: "CDK"
date: "2022-02-04"
readTime: 5
bannerImage: "cdk-stack.png"
tags:
  - AWS
  - CDK
  - Cloud
---

## What is a CDK stack?

A stack is basically the combination of all the cloud components you define into a single unit. A CDK application can have multiple stacks.

### Key concepts

The CDK comes with a stack construct built in.

```
const app = new App();

new MyFirstStack(app, 'stack1');
new MySecondStack(app, 'stack2');

app.synth();

```

List all of the stacks in your application

```
cdk ls
```

Generate the cloudformation for the stacks

```
cdk synth
```

The cdk will generate a separate template for each stack instance. Even if the two stacks are instances of the same class, the AWS CDK will generate them as two individual templates.

It is possible to generate the stack templates separately.

```
cdk synth stack1
```

A more concrete example of a CDK stack is below. Here, we are creating a stack with an S3 bucket.

```
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class SomeCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new s3.Bucket(this, 'HelloBucket');
  }
}

```

Deploying the stack is simple

```
cdk deploy
```

Once the stack has completed deploying, you will see the bucket listed under the `resources` section. Stacks can also be deployed separately.

```
cdk deploy my-stack
```

What about passing a name to my stack?

```
new MyStack(this, 'stack-id', { stackName: 'this-is-stack-name' });
```

You can see a more detailed example of a [CDK stack here](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Stack.html).

I hope you enjoyed the article which is a small introduction to the CDK stacks. You can explore some more examples here.
