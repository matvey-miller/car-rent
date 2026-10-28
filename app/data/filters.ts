export interface Checkboxes {
  id: string;
  name: string;
  value: string;
  count: number;
}

export const typeFilters: Checkboxes[] = [
  { id: '1', name: 'Sport', value: 'Sport', count: 10 },
  { id: '2', name: 'SUV', value: 'SUV', count: 12 },
  { id: '3', name: 'MPV', value: 'MPV', count: 16 },
  { id: '4', name: 'Sedan', value: 'Sedan', count: 20 },
  { id: '5', name: 'Coupe', value: 'Coupe', count: 14 },
  { id: '6', name: 'Hatchback', value: 'Hatchback', count: 14 },
];

export const capacityFilters: Checkboxes[] = [
  { id: '1', name: '2 Person', value: '2', count: 10 },
  { id: '2', name: '4 Person', value: '4', count: 14 },
  { id: '3', name: '6 Person', value: '6', count: 12 },
  { id: '4', name: '8 or More', value: '8', count: 16 },
];