import { create } from 'zustand'

const useEntidadStore = create((set) => ({
    entidad: '',
    setEntidad: (entidad) => set({ entidad: entidad }),
}))

export default useEntidadStore