export interface FilterOption {
  id: string;
  name: string;
  count: number;
  checked?: boolean;
}

export const typeFilters: FilterOption[] = [
  { id: '1', name: 'Sport', count: 10, checked: true },
  { id: '2', name: 'SUV', count: 12, checked: true },
  { id: '3', name: 'MPV', count: 16 },
  { id: '4', name: 'Sedan', count: 20 },
  { id: '5', name: 'Coupe', count: 14 },
  { id: '6', name: 'Hatchback', count: 14 },
];

export const capacityFilters: FilterOption[] = [
  { id: '1', name: '2 Person', count: 10, checked: true },
  { id: '2', name: '4 Person', count: 14 },
  { id: '3', name: '6 Person', count: 12 },
  { id: '4', name: '8 or More', count: 16, checked: true },
];