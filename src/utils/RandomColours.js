const colors = [
    '#4f7ebf',
    '#8eb7eb',
    '#b2e7f5',
    '#ffef8a',
    '#ffcb6b',
];

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]; // Return a random hex color
};
