import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** boat */
export type Boat = {
  __typename?: 'Boat';
  containerCount?: Maybe<Scalars['Float']>;
  containers?: Maybe<Array<Container>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  timeOfArrival?: Maybe<Scalars['String']>;
  transitStatus?: Maybe<Scalars['String']>;
};

/** container */
export type Container = {
  __typename?: 'Container';
  boat?: Maybe<Boat>;
  content: Scalars['String'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  boat: Boat;
  boats: Array<Boat>;
  container: Container;
  containers: Array<Container>;
};


export type QueryBoatArgs = {
  id: Scalars['String'];
};


export type QueryContainerArgs = {
  id: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boat: ResolverTypeWrapper<Boat>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Container: ResolverTypeWrapper<Container>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boat: Boat;
  Boolean: Scalars['Boolean'];
  Container: Container;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Query: {};
  String: Scalars['String'];
};

export type UpperDirectiveArgs = { };

export type UpperDirectiveResolver<Result, Parent, ContextType = any, Args = UpperDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BoatResolvers<ContextType = any, ParentType extends ResolversParentTypes['Boat'] = ResolversParentTypes['Boat']> = {
  containerCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  containers?: Resolver<Maybe<Array<ResolversTypes['Container']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeOfArrival?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transitStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Container'] = ResolversParentTypes['Container']> = {
  boat?: Resolver<Maybe<ResolversTypes['Boat']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  boat?: Resolver<ResolversTypes['Boat'], ParentType, ContextType, RequireFields<QueryBoatArgs, 'id'>>;
  boats?: Resolver<Array<ResolversTypes['Boat']>, ParentType, ContextType>;
  container?: Resolver<ResolversTypes['Container'], ParentType, ContextType, RequireFields<QueryContainerArgs, 'id'>>;
  containers?: Resolver<Array<ResolversTypes['Container']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Boat?: BoatResolvers<ContextType>;
  Container?: ContainerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  upper?: UpperDirectiveResolver<any, any, ContextType>;
};

export type GetBoatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoatsQuery = { __typename?: 'Query', boats: Array<{ __typename?: 'Boat', id: string, name: string, containerCount?: number | null, transitStatus?: string | null, timeOfArrival?: string | null }> };

export type GetContainerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContainerQuery = { __typename?: 'Query', containers: Array<{ __typename?: 'Container', id: string, content: string }> };


export const GetBoatsDocument = gql`
    query GetBoats {
  boats {
    id
    name
    containerCount
    transitStatus
    timeOfArrival
  }
}
    `;

/**
 * __useGetBoatsQuery__
 *
 * To run a query within a React component, call `useGetBoatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoatsQuery(baseOptions?: Apollo.QueryHookOptions<GetBoatsQuery, GetBoatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoatsQuery, GetBoatsQueryVariables>(GetBoatsDocument, options);
      }
export function useGetBoatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoatsQuery, GetBoatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoatsQuery, GetBoatsQueryVariables>(GetBoatsDocument, options);
        }
export type GetBoatsQueryHookResult = ReturnType<typeof useGetBoatsQuery>;
export type GetBoatsLazyQueryHookResult = ReturnType<typeof useGetBoatsLazyQuery>;
export type GetBoatsQueryResult = Apollo.QueryResult<GetBoatsQuery, GetBoatsQueryVariables>;
export const GetContainerDocument = gql`
    query GetContainer {
  containers {
    id
    content
  }
}
    `;

/**
 * __useGetContainerQuery__
 *
 * To run a query within a React component, call `useGetContainerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContainerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContainerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContainerQuery(baseOptions?: Apollo.QueryHookOptions<GetContainerQuery, GetContainerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContainerQuery, GetContainerQueryVariables>(GetContainerDocument, options);
      }
export function useGetContainerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContainerQuery, GetContainerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContainerQuery, GetContainerQueryVariables>(GetContainerDocument, options);
        }
export type GetContainerQueryHookResult = ReturnType<typeof useGetContainerQuery>;
export type GetContainerLazyQueryHookResult = ReturnType<typeof useGetContainerLazyQuery>;
export type GetContainerQueryResult = Apollo.QueryResult<GetContainerQuery, GetContainerQueryVariables>;