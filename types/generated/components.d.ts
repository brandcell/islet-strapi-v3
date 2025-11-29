import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutGrid1LargeLeft2Small extends Struct.ComponentSchema {
  collectionName: 'components_layout_grid_1_large_left_2_smalls';
  info: {
    displayName: 'Grid - 1 Large Left 2 Small';
  };
  attributes: {
    grid_large_left: Schema.Attribute.String &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<'grid_large_left'>;
    portfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio2: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio3: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
  };
}

export interface LayoutGrid1LargeRight2Small extends Struct.ComponentSchema {
  collectionName: 'components_layout_grid_1_large_right_2_smalls';
  info: {
    displayName: 'Grid - 1 Large Right 2 Small';
  };
  attributes: {
    grid_large_right: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'grid_large_right'>;
    portfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio2: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio3: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
  };
}

export interface LayoutGrid1X1 extends Struct.ComponentSchema {
  collectionName: 'components_layout_grid_1_x_1s';
  info: {
    displayName: 'Grid - 1 x 1';
  };
  attributes: {
    grid_1_1: Schema.Attribute.String &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<'grid_1_1'>;
    portfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
  };
}

export interface LayoutGrid2X2 extends Struct.ComponentSchema {
  collectionName: 'components_layout_grid_2_x_2s';
  info: {
    displayName: 'Grid - 2 x 1';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<['Aspect 16:9', 'Aspect 9:16']>;
    grid_2_1: Schema.Attribute.String &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<'grid_2_1'>;
    portfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio2: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
  };
}

export interface LayoutGrid3X1 extends Struct.ComponentSchema {
  collectionName: 'components_layout_grid_3_x_1s';
  info: {
    displayName: 'Grid - 3 x 1';
  };
  attributes: {
    aspectRatio: Schema.Attribute.Enumeration<['Aspect 16:9', 'Aspect 9:16']>;
    grid_3_1: Schema.Attribute.String &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<'grid_3_1'>;
    portfolio: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio2: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
    portfolio3: Schema.Attribute.Relation<
      'oneToOne',
      'api::portfolio.portfolio'
    >;
  };
}

export interface LayoutPortfolioGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolio_grids';
  info: {
    displayName: 'Portfolio Grid';
    icon: 'grid';
  };
  attributes: {
    gridIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    gridType: Schema.Attribute.Enumeration<
      ['Three Col ', 'Two Col ', 'Single ', 'Large Right ', 'Large Left']
    > &
      Schema.Attribute.DefaultTo<'Three Col '>;
    portfolios: Schema.Attribute.Relation<
      'oneToMany',
      'api::portfolio.portfolio'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.grid-1-large-left-2-small': LayoutGrid1LargeLeft2Small;
      'layout.grid-1-large-right-2-small': LayoutGrid1LargeRight2Small;
      'layout.grid-1-x-1': LayoutGrid1X1;
      'layout.grid-2-x-2': LayoutGrid2X2;
      'layout.grid-3-x-1': LayoutGrid3X1;
      'layout.portfolio-grid': LayoutPortfolioGrid;
    }
  }
}
