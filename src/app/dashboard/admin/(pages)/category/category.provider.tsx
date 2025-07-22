"use client";

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Category, CreateCategory } from "./category.schema";
import { getCategoriesAction } from "./category.action";
import { useMutation } from "react-query";
import { useFetch } from "@/hooks/use-fetch";

interface CategoriesContextType {
  categories: Category[];
  loading: boolean;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  addCategory: (category: CreateCategory) => void;
  errors: any;
  register: ReturnType<typeof useForm<CreateCategory>>["register"];
  handleSubmit: ReturnType<typeof useForm<CreateCategory>>["handleSubmit"];
  refreshCategories: () => void;
  openEditModal: (category: Category) => void;
  selectedCategory: Category | null;
}


const CategoriesContext = createContext<CategoriesContextType | undefined>(
  undefined
);

interface CategoriesProviderProps extends PropsWithChildren {
  action: (data: any) => Promise<void | any>;
}

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const { postData } = useFetch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCategory>();

  const submitCategory = useMutation(
    (data: any) => postData("/categories", data),
    {
      onSuccess: () => {
        toast.success("Category added successfully")
        reset()

        setModal(false)
      },
      onError: (error: any) => {
        console.error("Error adding product:", error)
        const errorMessage = error instanceof Error ? error.message : "Error adding product"
        toast.error(errorMessage)
      },
    }
  )








  // ✅ Fetch Categories
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategoriesAction();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const updateCategoryMutation = useMutation(
    (data: any) => postData(`/categories/${data.id}`, data),
    {
      onSuccess: () => {
        toast.success("Category updated successfully");
        reset();
        setModal(false);
        refreshCategories();
      },
      onError: (error: any) => {
        console.error("Error updating category:", error);
        const errorMessage = error instanceof Error ? error.message : "Error updating category";
        toast.error(errorMessage);
      },
    }
  );
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  // ✅ Form Submission Handler
  const addCategory = (category: CreateCategory) => {
    if (selectedCategory) {
      // Edit হচ্ছে
      updateCategoryMutation.mutate({
        id: selectedCategory.id,
        ...category,
        slug: category.slug ?? category.name.toLowerCase(),
      });
    } else {
      // নতুন Add হচ্ছে
      submitCategory.mutate({
        ...category,
        slug: category.slug ?? category.name.toLowerCase(),
      });
    }
  };

  const openEditModal = (category: Category) => {
    setSelectedCategory(category);
    setModal(true);
    reset({
      name: category.name,
      description: category.description,
      isActive: category.isActive,
      slug: category.slug,
      sortOrder: category.sortOrder,
    });
  };

  const refreshCategories = () => {
    fetchCategories();
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        loading,
        modal,
        setModal,
        addCategory,
        errors,
        register,
        handleSubmit,
        refreshCategories,
        openEditModal,
        selectedCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
}
