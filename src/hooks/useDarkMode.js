import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key) => {
     const [value, setValue] = useLocalStorage(key);

  
    const toggleClass = e => {
        e.preventDefault()
        setValue(!value)
    }     
    return [value, toggleClass]
}