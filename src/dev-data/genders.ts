export interface Gender {
  label: string;
  value: string;
}

export const genders: Gender[] = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Others',
    value: 'others',
  },
  {
    label: 'Prefer not to say',
    value: 'prefer-not',
  },
];
