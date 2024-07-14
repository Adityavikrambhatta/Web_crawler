import { create } from 'zustand';

const useStore = create((set) => ({
  prompt_response : "",
  search: (value) => set({prompt_response : value }),
}));

export default useStore;
