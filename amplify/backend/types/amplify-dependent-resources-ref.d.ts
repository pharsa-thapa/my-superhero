export type AmplifyDependentResourcesAttributes = {
  "api": {
    "apisuperhero": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "mysuperhero": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "function": {
    "fetchSuperheroTest": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}