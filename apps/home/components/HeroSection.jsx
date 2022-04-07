import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import { toFieldPath, pickDataAttrs } from '@stackbit/annotations';

import { Button } from './Button';

export const HeroSection = (props) => {
  return (
    <div {...pickDataAttrs(props)} className="hero">
      <div className="hero-content">
        <h1 {...toFieldPath('.heading')}>{props.heading}</h1>
        {props.subheading && (
          <Markdown {...toFieldPath('.subheading')}>{props.subheading}</Markdown>
        )}
        {props.buttons?.length > 0 && (
          <div className="hero-actions">
            {props.buttons.map((button, idx) => (
              <Button {...button} key={idx} {...toFieldPath(`.buttons.${idx}`)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
