import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // При инициализации читаем из localStorage или ставим initialValue
  const [state, setState] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (e) {
      console.error(`Ошибка чтения ${key} из localStorage`, e);
      return initialValue;
    }
  });

  // При каждом изменении state сохраняем его в localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error(`Ошибка записи ${key} в localStorage`, e);
    }
  }, [key, state]);

  return [state, setState];
}
