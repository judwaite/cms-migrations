import React from 'react';
import { usePageUrl } from '@hubspot/cms-components';

export const meta = {
  title: 'Page URL Test',
  description: 'Page URL Test',
};

export const fields = [];

export const Component = () => {
  const pageUrl = usePageUrl();

  return (
    <dl>
      <dt>Href</dt>
      <dd>{pageUrl.href}</dd>
      <dt>Pathname</dt>
      <dd>{pageUrl.pathname}</dd>
      <dt>Search</dt>
      <dd>{pageUrl.search}</dd>
      <dt>Hash</dt>
      <dd>{pageUrl.hash}</dd>
    </dl>
  );
};
