export const SIZE_X = 11;

export const SIZE_Y = 11;

const xCenter = Math.round(SIZE_X / 2) - 1;
const yCenter = Math.round(SIZE_Y / 2) - 1;

export const POSITION_MAP = {
  center: {
    x: xCenter,
    y: yCenter,
  },
  topLeft: {
    x: 0,
    y: 0,
  },
  topRight: {
    x: SIZE_X - 1,
    y: 0,
  },
  topCenter: {
    x: xCenter,
    y: 0,
  },
  bottomLeft: {
    x: 0,
    y: SIZE_Y - 1,
  },
  bottomRight: {
    x: SIZE_X - 1,
    y: SIZE_Y - 1,
  },
  bottomCenter: {
    x: xCenter,
    y: SIZE_Y - 1,
  },
  leftCenter: {
    x: 0,
    y: yCenter,
  },
  rightCenter: {
    x: SIZE_X - 1,
    y: yCenter,
  },
};

export const ECHO = 5;

export const HISTORY_SIZE = Math.round(Math.sqrt(Math.pow(SIZE_X, 2) + Math.pow(SIZE_Y, 2)));