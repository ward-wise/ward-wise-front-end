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
