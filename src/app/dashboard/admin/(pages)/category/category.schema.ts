export interface Category {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  isActive: boolean;
  sortOrder: string;
}

export interface CreateCategory {
  name: string;
  description: string;
  slug: string;
  imageUrl?: string;
  isActive?: boolean;
  sortOrder?: string;
}

export interface CategoriesResponse {
  data: Category[];
}
