import { style } from '@vanilla-extract/css';

export const roomContainer = style({
  display: 'flex',
  width: '100%',
  maxWidth: 1830,
  gap: 30,
});

export const wideArea = style({
  maxWidth: 1314,
  width: 'calc(73% - 15px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
});

export const narrowArea = style({
  maxWidth: 486,
  width: 'calc(28% - 15px)',
  display: 'flex',
  position: 'relative',
});

export const userList = style({
  width: '100%',
});

export const chattingArea = style({
  width: '100%',
  height: 80,
  alignItems: 'center',
});

export const detailArea = style({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  top: 0,
});

export const buttonWrapper = style({
  position: 'absolute',
  display: 'flex',
  height: 80,
  width: '100%',
  bottom: 0,
});
