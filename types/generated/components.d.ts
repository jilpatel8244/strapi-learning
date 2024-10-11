import type { Struct, Schema } from '@strapi/strapi';

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    MetaData: Schema.Attribute.Component<'meta.meta', true>;
  };
}

export interface MetaMeta extends Struct.ComponentSchema {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'meta';
  };
  attributes: {
    name: Schema.Attribute.String;
    content: Schema.Attribute.String;
  };
}

export interface BlocksLink extends Struct.ComponentSchema {
  collectionName: 'components_blocks_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    src: Schema.Attribute.String;
    label: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    header: Schema.Attribute.Component<'blocks.header', false>;
    text: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'blocks.buttons', true>;
  };
}

export interface BlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['morning', 'noon', 'evening']>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksButtons extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'buttons';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<['morning', 'noon', 'evening']>;
    link: Schema.Attribute.Component<'blocks.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.seo': SeoSeo;
      'meta.meta': MetaMeta;
      'blocks.link': BlocksLink;
      'blocks.hero': BlocksHero;
      'blocks.header': BlocksHeader;
      'blocks.buttons': BlocksButtons;
    }
  }
}
