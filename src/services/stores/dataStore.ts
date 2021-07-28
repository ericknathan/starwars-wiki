import create, { UseStore } from 'zustand'
import { ItemDetail } from '~/types'

export const useDataStore: UseStore<{
  selectedData?: ItemDetail | null
  setSelectedData: (data: ItemDetail | null) => void
}> = create((set) => ({
  selectedData: null,
  setSelectedData: (selectedData) => set({ selectedData }),
}))
