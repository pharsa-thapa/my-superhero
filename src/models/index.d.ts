import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSuperhero = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Superhero, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly description?: string | null;
  readonly externalId?: string | null;
  readonly powerstats?: string | null;
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
  readonly description?: string | null;
  readonly externalId?: string | null;
  readonly powerstats?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Superhero = LazyLoading extends LazyLoadingDisabled ? EagerSuperhero : LazySuperhero

export declare const Superhero: (new (init: ModelInit<Superhero>) => Superhero) & {
  copyOf(source: Superhero, mutator: (draft: MutableModel<Superhero>) => MutableModel<Superhero> | void): Superhero;
}