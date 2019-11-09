import { action } from '@storybook/addon-actions';

import { declarations, imports } from '../../stories';
import { HeroSearchComponent } from './hero-search.component';

const story = {
  title: 'hero-search',
};

const heroes = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' },
  { id: 4, name: 'spam' },
]

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations: [...declarations],
    providers: [],
  },
  component: HeroSearchComponent,
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

export default story;
