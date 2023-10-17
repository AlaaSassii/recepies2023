export const sortArrayAlphabetically = (arr: string[]): string[] => {
    return arr.slice().sort((a, b) => a.localeCompare(b));
}