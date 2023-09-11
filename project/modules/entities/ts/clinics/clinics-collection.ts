import { Collection } from "@beyond-js/reactive/entities";
import { ClinicsCollectionBridge } from "bg-use-cases/entities.bridge";
import { Clinic } from "./clinics-item";
import config from "bg-use-cases/config";

export /*bundle*/ class Clinics extends Collection {
  constructor() {
    super({
      provider: ClinicsCollectionBridge,
      storeName: "clinics",
      db: config.params.application.localDB,
      localdb: true,
      item: Clinic,
    });
  }
}
