export const STAGE_Width = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => (
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_Width).fill([0,'clear'])
))