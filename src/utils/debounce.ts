export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeout: number;
  
    return function (...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    } as T;
  }
  