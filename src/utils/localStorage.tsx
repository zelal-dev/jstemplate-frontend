export const localSave = (key:string, value:any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const localGet = (key:string) => {
  const value = typeof window !== "undefined" && localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const localRemove = (key:string) => {
  localStorage.removeItem(key);
};
