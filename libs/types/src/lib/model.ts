import { IActionElement, IBlockElement, IModel, IPage, ISectionElement } from './base';

/**
 * Contains any global context data available to all pages
 */
export interface SiteConfigModel extends IModel {
  readonly title: string;
}

/**
 * Contains any global context data available to all pages
 */
export interface FooterConfigModel extends IModel {
  readonly title: string;
}

/**
 * The default page type contains no additional layout
 * decorations (slots) and delegates all style choices
 * such as margin and padding to its provided sections
 */
export interface PageModel extends IPage {
  readonly sections: ISectionElement[];
}

/**
 * Buttons allow users to perform an action or to
 * navigate to another page. They have multiple styles
 * for various needs, and are ideal for calling
 * attention to where a user needs to do something in
 * order to move forward in a flow.
 */
export interface ButtonModel extends IBlockElement, IActionElement {
  readonly theme: string;
}

/**
 * A Card represents a rectangular card that contains
 * a variety of text and image layouts. Cards
 * encapsulate units of a data set, such as a gallery
 * of image/caption pairs.
 */
export interface CardModel extends IBlockElement {
  readonly heading: string;
  readonly subheading: string;
  readonly url: string;
}

/**
 * A CardGridSection positions its child elements in
 * an evenly spaced responsive grid.
 */
export interface CardGridSectionModel extends ISectionElement {
  readonly items: IBlockElement[];
}

/**
 * The HeroSection is a section component for
 * displaying a large block or media element with a
 * title, description, content, and actions.
 */
export interface HeroSectionModel extends ISectionElement {
  readonly actions: IActionElement[];
}
