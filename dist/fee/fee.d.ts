import { ApisauceInstance } from "apisauce";
import { FeeEstimate } from "./types";
export declare class FeeApi {
    private api;
    constructor(apisauceInstance: ApisauceInstance);
    getEstimate(): Promise<FeeEstimate | undefined>;
}
