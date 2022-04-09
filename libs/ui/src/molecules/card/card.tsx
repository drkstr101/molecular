import { pickDataAttrs, toFieldPath } from '@stackbit/annotations';
import { CardModel } from '@watheia/molecular.types';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

export function Card(model: CardModel & JSX.IntrinsicAttributes) {
  return (
    <Link href={model.url ?? '/'}>
      <a {...pickDataAttrs(model)} className="card-container">
        <h3 {...toFieldPath('.heading')} className="card-heading">
          {model.heading}
        </h3>
        {model.subheading && (
          <Markdown {...toFieldPath('.subheading')} className="card-subheading">
            {model.subheading}
          </Markdown>
        )}
      </a>
    </Link>
  );
}

export default Card;
