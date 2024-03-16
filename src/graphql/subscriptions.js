/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSuperhero = /* GraphQL */ `
  subscription OnCreateSuperhero(
    $filter: ModelSubscriptionSuperheroFilterInput
  ) {
    onCreateSuperhero(filter: $filter) {
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
export const onUpdateSuperhero = /* GraphQL */ `
  subscription OnUpdateSuperhero(
    $filter: ModelSubscriptionSuperheroFilterInput
  ) {
    onUpdateSuperhero(filter: $filter) {
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
export const onDeleteSuperhero = /* GraphQL */ `
  subscription OnDeleteSuperhero(
    $filter: ModelSubscriptionSuperheroFilterInput
  ) {
    onDeleteSuperhero(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
