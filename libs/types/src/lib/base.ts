import { Maybe } from './maybe';

/**
 * Metadata is injected into each model instance upon
 * instantiation, and contains information pertaining
 * to the model AST.
 */
export interface Metadata {
  readonly id: string;
  readonly source: string;
  readonly modelType: string;
  readonly modelName: string;
  readonly modelLabel: string;
  readonly relSourcePath: string;
  readonly relProjectPath: string;
  readonly sourceName: string;
  readonly sourcePath: string;
}

/**
 * Base type for all stackbit models.
 */
export interface IModel {
  readonly __metadata: Metadata;
}

/**
 * A trait applied to all other Pages
 */
export interface IPage extends IModel {
  readonly layout: string;
  readonly title: string;
  readonly content: Maybe<string>;
}

/**
 * A trait applied to all block elements
 */
export interface IBlockElement extends IModel {
  readonly ref: Maybe<string>;
  readonly slot: Maybe<string>;
}

/**
 * A trait applied to clickable actions, such as a
 * button or link
 */
export interface IActionElement extends IBlockElement {
  readonly label: string;
  readonly url: string;
}

/**
 * A trait applied to all section elements
 */
export interface ISectionElement extends IBlockElement {
  readonly heading: Maybe<string>;
  readonly subheading: Maybe<string>;
}
