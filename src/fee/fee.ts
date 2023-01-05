import { ApisauceInstance } from "apisauce";
import { withErrorHandler } from "../utils";
import { FeeEstimate } from "./types";

export class FeeApi {
  private api: ApisauceInstance;

  constructor(apisauceInstance: ApisauceInstance) {
    this.api = apisauceInstance;
  }

  async getEstimate() {
    return withErrorHandler(() => this.api.get<FeeEstimate>(`/fee-estimates`));
  }
}
