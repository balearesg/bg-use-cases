import type { Sequelize } from "sequelize";
import { Clinics as _Clinics } from "./clinics";
import type { ClinicsAttributes, ClinicsCreationAttributes } from "./clinics";

export {
  _Clinics as Clinics,
};

export type {
  ClinicsAttributes,
  ClinicsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Clinics = _Clinics.initModel(sequelize);


  return {
    Clinics: Clinics,
  };
}
