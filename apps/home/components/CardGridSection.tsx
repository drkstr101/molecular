import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';

import { Card } from './Card';

export const CardGridSection = (props) => {
  return (
    <div {...pickDataAttrs(props)} className="card-grid-container">
      <h2 {...toFieldPath('.heading')} className="card-grid-heading">
        {props.heading}
      </h2>
      {props.subheading && (
        <Markdown {...toFieldPath('.subheading')} className="card-grid-subheading">
          {props.subheading}
        </Markdown>
      )}
      {props.items?.length > 0 && (
        <div className="card-grid-items">
          {props.items.map((card, idx) => (
            <Card {...card} key={idx} {...toFieldPath(`.items.${idx}`)} />
          ))}
        </div>
      )}
    </div>
  );
};
