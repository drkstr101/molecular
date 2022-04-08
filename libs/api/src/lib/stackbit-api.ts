import { IModel, IPage, LayoutType } from '@watheia/molecular.types';
import { SourcebitDataCache } from 'sourcebit-target-next';
import dataClient from './sourcebit-data-client';
export type { SourcebitDataCache };

export class StackbitApi {
  constructor(private data: SourcebitDataCache) {}

  async getStaticPropsFor(slug: string): Promise<Record<string, any>> {
    return dataClient.getStaticPropsForPageAtPath(slug);
  }

  async getStaticPaths(): Promise<string[]> {
    return dataClient.getStaticPaths();
  }

  getData(): SourcebitDataCache {
    return this.data;
  }

  /**
   * Extract objects from the data cache by matching the "layout" property in
   * frontmatter.
   *
   * @param {string} type Name of the model
   * @returns {array} Sourcebit data objects
   */
  pagesByLayout(layout: LayoutType): IPage[] {
    return this.data.objects.filter((it) => it.frontmatter?.layout === layout);
  }

  /**
   * Find a single model from the data cache by matching the "type"
   * property. Returns only the first match, or throws
   * if missing.
   *
   * @param {string} type Name of the model
   * @returns {IModel} First matching object
   */
  modelByType(type: string): IModel {
    const model = this.data.objects.find((it) => it.type === type);
    if (!model) {
      throw new Error(`A model with type (${type}) could not be located in the cache.`);
    }

    return model;
  }
}
