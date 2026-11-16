export type PageId = 'home' | 'about' | 'products' | 'contact';

export type ProductCategory =
  | 'Power Tools'
  | 'Belt Sanders'
  | 'Wood Routers'
  | 'Concrete Vibrators'
  | 'Drilling Equipment'
  | 'Cutting and Grinding Tools';

export type ProductFilter = 'All' | ProductCategory;

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  shortDescription: string;
  fullDescription: string;
  applications: string[];
  highlights: string[];
  availabilityNote: string;
}

export interface ContactEnquiryPrefill {
  subject?: string;
  message?: string;
}
