import {Pages} from '../../shared/store/pages.actions';

export enum PageSize {
  A4,
  A5
}

export enum PageFold {
  NONE,
  ONE_DIRECTIONAL,
  ZIGZAG,
  SPIRAL
}

export interface Page {
  id: number;
  size: PageSize;
  fold: PageFold;
  bleed: number;
  padding: number;
  title: string;
  description: string;
  image: string;
}

export const PAGE_TYPES: Page[] = [
  {
    id: 1,
    size: PageSize.A4,
    fold: PageFold.NONE,
    bleed: 3,
    padding: 5,
    title: 'A4',
    description: 'unfolded A4',
    image: ''
  },
  {
    id: 2,
    size: PageSize.A4,
    fold: PageFold.ONE_DIRECTIONAL,
    bleed: 3,
    padding: 5,
    title: 'A4 to A5',
    description: 'A4 folded to A5',
    image: ''
  },
  {
    id: 3,
    size: PageSize.A4,
    fold: PageFold.ZIGZAG,
    bleed: 3,
    padding: 5,
    title: 'A4 to DINLang zigzag',
    description: 'A4 to DINLang with zigzag fold',
    image: ''
  }
];
