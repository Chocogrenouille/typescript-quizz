export const shuffleAnswerArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5);