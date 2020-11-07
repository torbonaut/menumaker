import {Pages} from '../../shared/store/pages.actions';

export enum PageSize {
  A4,
  A5,
  DINLANG
}

export enum PageFold {
  NONE,
  ONE_DIRECTIONAL,
  ZIGZAG,
  SPIRAL
}

export interface Section {
  title: string;
  content: any;
}

export interface Page {
  id: number;
  size: PageSize;
  fold: PageFold;
  width: number;
  height: number;
  sectionWidth: number;
  sectionHeight: number;
  bleed: number;
  padding: number;
  title: string;
  description: string;
  image: string;
  sections: Section[];
}



export const PAGE_TYPES: Page[] = [
  {
    id: 1,
    size: PageSize.A4,
    fold: PageFold.NONE,
    width: 210,
    height: 297,
    sectionWidth: 210,
    sectionHeight: 297,
    bleed: 3,
    padding: 5,
    title: 'Single Page',
    description: 'A4 single-sided, unfolded - 1 content section, 3mm bleed, 5mm padding',
    image: '',
    sections: [
      {
        title: 'Page 1 Front',
        content: null
      }
    ]
  },
  {
    id: 2,
    size: PageSize.A4,
    fold: PageFold.ONE_DIRECTIONAL,
    width: 297,
    height: 210,
    sectionWidth: 148.5,
    sectionHeight: 210,
    bleed: 3,
    padding: 5,
    title: 'A4 to A5',
    description: 'A4 double-sided, folded to A5 - 4 content sections, 3mm bleed, 5mm padding',
    image: '',
    sections: [
      {
        title: 'Front',
        content: null
      },
      {
        title: 'Inner left',
        content: null
      },
      {
        title: 'Inner Right',
        content: null
      },
      {
        title: 'Back',
        content: null
      }
    ]
  },
  {
    id: 3,
    size: PageSize.A4,
    fold: PageFold.ZIGZAG,
    width: 297,
    height: 210,
    sectionWidth: 99,
    sectionHeight: 210,
    bleed: 3,
    padding: 5,
    title: 'A4 to DINLang',
    description: 'A4 both-sided, folded to DINLang - 6 content sections, with zigzag fold, 3mm bleed, 5mm padding',
    image: '',
    sections: [
      {
        title: 'Front',
        content: null
      },
      {
        title: 'Front Inner left',
        content: null
      },
      {
        title: 'Front Inner Right',
        content: null
      },
      {
        title: 'Back',
        content: null
      },
      {
        title: 'Back Inner Left',
        content: null
      },
      {
        title: 'Back Inner right',
        content: null
      }
    ]
  }
];
