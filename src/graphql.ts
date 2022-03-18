
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class HelloResponse {
    greeting: string;
}

export abstract class IQuery {
    abstract hello(): HelloResponse | Promise<HelloResponse>;
}

type Nullable<T> = T | null;
