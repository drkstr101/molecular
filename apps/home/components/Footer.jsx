import * as React from 'react';
import Markdown from 'markdown-to-jsx';

export const Footer = ({ body }) => {
  return (
    <footer className="p-4 footer footer-center bg-base-300 text-base-content">
      <div>
        <p>{body}</p>
      </div>
    </footer>
  );
};
