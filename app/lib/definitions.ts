//Type definitions for data go here

export type WardGeoLookupData = {
  cleansingStatus: "ACTUAL";
  commonStreetNameID: number;
  extendDist: number;
  fullAddress: string;
  highAddress: number;
  lowAddress: number;
  preDir: string;
  streetName: string;
  streetNameID: number;
  streetSide: string;
  streetType: string;
  sufDir: string;
  transID: number;
  unitNumber: string;
  latitude: number;
  longitude: number;
  geoValues: [
    {
      geographyName: string;
      geographyValue: string;
    }
  ];
  failureReasonCd: number;
  XCoord: number;
  XYSource: string;
  YCoord: number;
};

export type gpsCoordinates = {
  latitude: number;
  longitude: number;
}

export type WebsiteType = {
  website?: string;
  facebook?: string;
  x?: string;
  instagram?: string;
};

export type WardContactInfo = {
  ward: number;
  alderperson: string;
  address: string | null;
  email: string;
  phone: string;
  websites: WebsiteType | null;
};

export type MenuItem = {
  name: string;
  id: string;
  avgUnitCost: number;
  unitMeasurement: string;
  description: string;
  notes: string[];
  isVisionZeroProject: boolean;
  imgFilename: string;
};
