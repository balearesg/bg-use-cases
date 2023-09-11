import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ClinicsAttributes {
  id: string;
  statusId?: string;
  name?: string;
  floor?: string;
  apartment?: string;
  formattedAddress?: string;
  country?: string;
  lat?: string;
  lng?: string;
  placeId?: string;
  administrativeAreaLevel1?: string;
  administrativeAreaLevel2?: string;
  creatorUserId?: number;
  modifierUserId?: number;
  timeCreated?: Date;
  timeUpdated?: Date;
}

export type ClinicsPk = "id";
export type ClinicsId = Clinics[ClinicsPk];
export type ClinicsOptionalAttributes = "statusId" | "name" | "floor" | "apartment" | "formattedAddress" | "country" | "lat" | "lng" | "placeId" | "administrativeAreaLevel1" | "administrativeAreaLevel2" | "creatorUserId" | "modifierUserId" | "timeCreated" | "timeUpdated";
export type ClinicsCreationAttributes = Optional<ClinicsAttributes, ClinicsOptionalAttributes>;

export class Clinics extends Model<ClinicsAttributes, ClinicsCreationAttributes> implements ClinicsAttributes {
  id!: string;
  statusId?: string;
  name?: string;
  floor?: string;
  apartment?: string;
  formattedAddress?: string;
  country?: string;
  lat?: string;
  lng?: string;
  placeId?: string;
  administrativeAreaLevel1?: string;
  administrativeAreaLevel2?: string;
  creatorUserId?: number;
  modifierUserId?: number;
  timeCreated?: Date;
  timeUpdated?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Clinics {
    return Clinics.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    statusId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      field: 'status_id'
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    floor: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    apartment: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    formattedAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'formatted_address'
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lng: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    placeId: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'place_id'
    },
    administrativeAreaLevel1: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'administrative_area_level_1'
    },
    administrativeAreaLevel2: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'administrative_area_level_2'
    },
    creatorUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'creator_user_id'
    },
    modifierUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'modifier_user_id'
    },
    timeCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'time_created'
    },
    timeUpdated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'time_updated'
    }
  }, {
    sequelize,
    tableName: 'clinics',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
