export interface Layer {
    "id": number;
    name: string;
    code: string;
}

export const dummyLayers: Layer[] = [
    { id:1, name: 'Database', code: 'db' },
    { id:2, name: 'Application', code: 'app' },
    { id:3, name: 'Web Layer', code: 'web' }
];
