export const getIntArray = (min: number, max: number) => {
    const result: number[] = [];
    for(let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

export const getRandomInArrayInRange = (min: number, max: number, count: number) => {
    return Array(max)
        .fill(0)
        .map((_, i) => min + i + 1)
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}