import { Item } from "@beyond-js/reactive/entities";
import { ClinicItemBridge } from "bg-use-cases/entities.bridge";
import config from "bg-use-cases/config";

export /*bundle*/ class Clinic extends Item<Clinic> {
  protected properties = [
    "id",
    "name",
    "formattedAddress",
    "country",
    "lat",
    "lng",
    "placeId",
    "administrativeAreaLevel1",
    "administrativeAreaLevel2",
    "creatorUserId",
    "modifierUserId",
    "timeCreated",
    "timeUpdated",
    "floor",
    "apartment",
    "statusId",
  ];

  constructor(params: { id: string | undefined } = { id: undefined }) {
    super({
      provider: ClinicItemBridge,
      storeName: "clinics",
      db: config.params.application.localDB,
      ...params,
    });
    this.init();
  }
}
