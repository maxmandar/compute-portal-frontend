export interface Environment {
    "id": number;
    "name": string;
    "code": string;
}

export const dummyEnvironments: Environment[] = [
    {
      id: 1,
      name: 'SIT',
      code: 'SIT',
    },
    {
      id: 2,
      name: 'UAT',
      code: 'UAT',
    },
    {
      id: 3,
      name: 'PROD',
      code: 'PROD',
    },
    {
      id: 4,
      name: 'DR',
      code: 'DR',
    },
    {
      id: 5,
      name: 'DEV',
      code: 'DEV',
    },
  ];

