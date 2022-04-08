import * as React from 'react';
import Markdown from 'markdown-to-jsx';

export const Footer = ({ copyright }) => {
  return (
    <div className="footer-container" data-sb-field-path="content/data/config.json:footer">
      <div data-sb-field-path=".copyright" className="footer-content">
        <Markdown>{copyright}</Markdown>
      </div>
    </div>
  );
};
