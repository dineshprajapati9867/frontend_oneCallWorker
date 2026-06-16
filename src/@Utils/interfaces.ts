export interface getAllSkillsCategoryI {
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
  _id: string
  profile: {
    url: string,
    file_name: string
  }
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  whatsApp_number: string;
  age: string;
  gender: string;

  languages: optionI[] | string[];

  skills: optionI[];
  images: {
    url: string,
    file: any
  }[]
  experience: optionI;
  days: string[];

  address_one: string;
  // address_two: string;
  area: string;
  landmark: string
  city: string;
  state: string;
  pincode: string;
  averageRating:number,
  totalReviews:number
}

export interface serviceCategoryI {
  _id: string;
  title: string;
  image_kit_id: string;
  image_kit_url: string;
}
export interface CreateReviewI {
  workerId: string;
  reviewerId:string,
  rating: number;
  description: string;
   images: {
    url: string,
    file: any
  }[]
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}


export interface Reviewer {
  _id: string;
  name: string;
  picture: string;
}

export interface ReviewImage {
  url: string;
  fileName?: string;
}

export interface Review {
  _id: string;
  workerId: string;
  reviewerId: Reviewer;
  userId:Reviewer,
  likes:[string]
  rating: number;
  description: string;
  images: ReviewImage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  total_comments:number
}