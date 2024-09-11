import { Params, Query } from "express-serve-static-core";
import { Request } from "express";


export const makeMockRequest = ({ params, query }: { params?: Params, query?: Query }): Request => {
    const request = {
        params: params || { },
        query: query || { }
    } as unknown;

    return request as Request
}