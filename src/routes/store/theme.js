import { writable } from 'svelte/store';

export const theme = writable();

export const checkTheme = () => {
    // console.log('hello')
    theme.set(localStorage.getItem('theme') || 'dark')
}

export const setTheme = (value) => {
    console.log(value)
    theme.set(value)
    localStorage.setItem('theme', value)
}