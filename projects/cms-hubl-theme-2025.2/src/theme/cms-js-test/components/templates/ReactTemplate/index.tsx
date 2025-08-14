import React from 'react';
import {
  ContentOutlets,
  DndModule,
  PageContents,
  TemplateMeta,
} from '@hubspot/cms-components';
import './globals.css';

export const meta = {
  templateType: 'page',
  isAvailableForNewContent: true,
} satisfies TemplateMeta;

export const contents = {
  mainDndArea: {
    type: 'dndArea',
    children: [
      {
        type: 'dndSection',
        children: [
          {
            type: 'dndColumn',
            width: 6,
            offset: 0,
            children: [
              {
                type: 'dndRow',
                children: [
                  buttonModule({
                    text: 'HubSpot',
                    url: 'https://hubspot.com',
                  }),
                ],
              },
            ],
          },
          {
            type: 'dndColumn',
            width: 6,
            offset: 6,
            children: [
              {
                type: 'dndRow',
                children: [
                  buttonModule({
                    text: 'Google',
                    url: 'https://google.com',
                  }),
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} satisfies PageContents;

export const hublDataTemplate = `
  {% set hublData = {
      "pageMeta": page_meta,
      "brandSettings": brand_settings,
      "builtInBodyClasses": builtin_body_classes,
      "htmlLang": html_lang,
      "htmlLangDir": html_lang_dir
    }
  %}`;

export default function Component(props: {
  content: ContentOutlets<typeof contents>;
  hublData: any;
}) {
  const faviconSrc: string | undefined =
    props.hublData.brandSettings?.favicon?.src;
  const htmlTitle = props.hublData.pageMeta?.htmlTitle;
  const metaDescription = props.hublData.pageMeta?.metaDescription;
  const bodyClasses = props.hublData.builtInBodyClasses;
  return (
    <html lang={props.hublData.htmlLang}>
      <head>
        <meta charSet="utf-8" />
        {htmlTitle ? <title>{htmlTitle}</title> : null}
        {faviconSrc ? <link rel="shortcut icon" href={faviconSrc} /> : null}
        <meta name="description" content={metaDescription} />
      </head>
      <body className={`body-wrapper ${bodyClasses} theme-overrides`}>
        <div>{props.content.mainDndArea}</div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </body>
    </html>
  );
}

function buttonModule(props: { text: string; url: string }): DndModule {
  return {
    type: 'dndModule',
    path: '@hubspot/button',
    fields: {
      button_text: props.text,
      link: { url: { href: props.url } },
    },
  };
}
