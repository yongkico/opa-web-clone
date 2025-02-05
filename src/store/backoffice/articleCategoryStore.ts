import { DataResponse } from '@/@types'
import { ArticleCategory } from '@/@types/Article'
import { create } from 'zustand'

type ArticleCategoryStore = {
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    isCreating: boolean
    setIsCreating: (isCreating: boolean) => void
    isUpdating: boolean
    setIsUpdating: (isUpdating: boolean) => void
    isDeleting: boolean
    setIsDeleting: (isDeleting: boolean) => void
    articleCategories: DataResponse<ArticleCategory[]>
    setArticleCategories: (articleCategories: DataResponse<ArticleCategory[]>) => void
    articleCategory: ArticleCategory
    setArticleCategory: (articleCategory: ArticleCategory) => void
}

export const articleCategoryStore = create<ArticleCategoryStore>()((set) => ({
    isFetching: false,
    setIsFetching: (isFetching) => set({ isFetching }),
    isCreating: false,
    setIsCreating: (isCreating) => set({ isCreating }),
    isUpdating: false,
    setIsUpdating: (isUpdating) => set({ isUpdating }),
    isDeleting: false,
    setIsDeleting: (isDeleting) => set({ isDeleting }),
    articleCategories: {} as DataResponse<ArticleCategory[]>,
    setArticleCategories: (articleCategories: DataResponse<ArticleCategory[]>) => set({ articleCategories }),
    articleCategory: {} as ArticleCategory,
    setArticleCategory: (articleCategory: ArticleCategory) => set({ articleCategory }),
}))
