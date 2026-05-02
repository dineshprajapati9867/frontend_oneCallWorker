export interface getAllWorkerListPropI {
  title: string;
  image_kit_url: string;
  image_kit_id: string;
}

export interface optionI {
  id: string | number;
  label: string;
  value: string;
}

export interface createProfileI {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  whatsApp_number: string;
  age: string;
  gender: string;

  languages: optionI[];

  skills: optionI[];
  experience: optionI;
  days: string[];

  address_one: string;
  address_two: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
}
