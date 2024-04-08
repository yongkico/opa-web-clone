import { DataResponse } from '@/@types'
import { Role } from '@/@types/Role'
import { create } from 'zustand'

type RoleStore = {
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    isCreating: boolean
    setIsCreating: (isCreating: boolean) => void
    isUpdating: boolean
    setIsUpdating: (isUpdating: boolean) => void
    isDeleting: boolean
    setIsDeleting: (isDeleting: boolean) => void
    roles: DataResponse<Role[]>
    setRoles: (roles: DataResponse<Role[]>) => void
    role: DataResponse<Role>
    setRole: (role: DataResponse<Role>) => void
}

export const roleStore = create<RoleStore>()((set) => ({
    isFetching: false,
    setIsFetching: (isFetching) => set({ isFetching }),
    isCreating: false,
    setIsCreating: (isCreating) => set({ isCreating }),
    isUpdating: false,
    setIsUpdating: (isUpdating) => set({ isUpdating }),
    isDeleting: false,
    setIsDeleting: (isDeleting) => set({ isDeleting }),
    roles: {} as DataResponse<Role[]>,
    setRoles: (roles: DataResponse<Role[]>) => set({ roles }),
    role: {} as DataResponse<Role>,
    setRole: (role: DataResponse<Role>) => set({ role }),
}))
