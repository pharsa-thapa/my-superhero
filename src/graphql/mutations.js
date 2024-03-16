/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSuperhero = /* GraphQL */ `
  mutation CreateSuperhero(
    $input: CreateSuperheroInput!
    $condition: ModelSuperheroConditionInput
  ) {
    createSuperhero(input: $input, condition: $condition) {
      id
      name
      image
      stats
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateSuperhero = /* GraphQL */ `
  mutation UpdateSuperhero(
    $input: UpdateSuperheroInput!
    $condition: ModelSuperheroConditionInput
  ) {
    updateSuperhero(input: $input, condition: $condition) {
      id
      name
      image
      stats
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteSuperhero = /* GraphQL */ `
  mutation DeleteSuperhero(
    $input: DeleteSuperheroInput!
    $condition: ModelSuperheroConditionInput
  ) {
    deleteSuperhero(input: $input, condition: $condition) {
      id
      name
      image
      stats
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      Users_Superheroes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      Users_Superheroes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      Users_Superheroes {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
