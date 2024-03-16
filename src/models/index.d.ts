import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerSuperhero = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Superhero, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly stats?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySuperhero = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Superhero, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly stats?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Superhero = LazyLoading extends LazyLoadingDisabled ? EagerSuperhero : LazySuperhero

export declare const Superhero: (new (init: ModelInit<Superhero>) => Superhero) & {
  copyOf(source: Superhero, mutator: (draft: MutableModel<Superhero>) => MutableModel<Superhero> | void): Superhero;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly Users_Superheroes?: (Superhero | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly Users_Superheroes: AsyncCollection<Superhero>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}