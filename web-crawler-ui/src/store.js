import { create } from 'zustand';

const useStore = create((set) => ({
  email : "",
  password : "",
  login : "",
  pageIndex : "mainPage",
  rememberPassword : "",
  url: '',
  pages: [],
  isCrawling: false,
  setUrl: (url) => set({ url }),
  setPageIndex : (pageIndex) => set((state) => ({ pageIndex })),
  addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),
  setIsCrawling: (isCrawling) => set({ isCrawling }),
  reset: () => set({ url: '', pages: [], isCrawling: false }),

}));

export default useStore;
