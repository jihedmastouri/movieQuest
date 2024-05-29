import { StateStorage } from 'zustand/middleware';

export function setupStorage(storage: any): StateStorage {
  return {
    setItem: (name, value) => {
      return storage.set(name, value);
    },
    getItem: (name) => {
      const value = storage.getString(name);
      return value ?? null;
    },
    removeItem: (name) => {
      return storage.delete(name);
    },
  };
}
