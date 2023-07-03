export interface SanStorageType {
  "name": string;
  "code": string;
  "default"?: boolean;
}


export const dummySanStorageType: SanStorageType[] = [
  {

    name: 'Tier 1',
    code: 'tier-1',
    default: false
  },
  {

    name: 'Tier 2',
    code: 'tier-2',
    default: true
  }
];
