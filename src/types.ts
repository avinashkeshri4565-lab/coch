export interface Course {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  role: string;
  rating: number;
  initials: string;
}

export interface EnquiryData {
  name: string;
  phone: string;
  course: string;
  librarySeat: string;
  batchTime: string;
  message: string;
}
