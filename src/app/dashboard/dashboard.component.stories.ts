import { action } from '@storybook/addon-actions';

import { declarations, imports } from '../../stories';
import { HeroSearchComponent } from '../hero-search/hero-search.component'
import { DashboardComponent } from './dashboard.component';

const story = {
  title: 'dashboard',
};

const heroes = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' },
]

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations: [...declarations, HeroSearchComponent],
    providers: [],
  },
  component: DashboardComponent,
  props: {
    heroes,
    getHeros: () => {},
    search: (term: string) => {
      action('search')(term);
    }
  },
});

component.story = {
  name: 'default',
}

export const nodata = () => ({
  component: DashboardComponent,
  props: {
    heroes: [],
  },
  imports: [],
  moduleMetadata: {
    imports,
    declarations: [...declarations, HeroSearchComponent],
  },
  providers: [],
});

nodata.story = {
  name: 'no data',
}

export default story;
