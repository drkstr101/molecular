import * as React from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';

export const Card = (props) => {
  return (
    <div className="card">
      <a {...pickDataAttrs(props)} className="card-body">
        <h3 {...toFieldPath('.title')} className="card-title">
          {props.title}
        </h3>
        {props.subtitle && <Markdown {...toFieldPath('.subtitle')}>{props.subtitle}</Markdown>}
      </a>
    </div>
  );
};
