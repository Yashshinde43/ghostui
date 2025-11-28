// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/ai-input.mdx": () => import("../content/docs/components/ai-input.mdx?collection=docs"), "components/alert.mdx": () => import("../content/docs/components/alert.mdx?collection=docs"), "components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), }),
};
export default browserCollections;