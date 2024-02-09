export const useSetLocalStorage = (name: string, data: boolean) =>
  JSON.parse(localStorage.setItem(name, JSON.stringify(data)))

export default useSetLocalStorage
