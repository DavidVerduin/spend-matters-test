import { Service } from "./base.service";

export const TestHttpService =  {
  getFact() {
    return Service.get();
  }
}