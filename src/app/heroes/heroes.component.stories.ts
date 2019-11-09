import { action } from '@storybook/addon-actions';

import { declarations, imports } from '../../stories';
import { HeroesComponent } from './heroes.component';

const story = {
  title: 'heroes',
};

const heroes = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' },
]

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations,
    providers: [],
  },
  component: HeroesComponent,
  props: {
    heroes,
    getHeros: () => {},
    add: (name: string) => {
      action('add')(name);
      heroes.push({ id: heroes.length + 1, name });
    }
  },
});

component.story = {
  name: 'default',
}

const nodataHeroes = [];

export const nodata = () => ({
  component: HeroesComponent,
  props: {
    heroes: nodataHeroes,
    add: (name: string) => {
      action('add')(name);
      nodataHeroes.push({ id: nodataHeroes.length + 1, name });
    }
  },
  moduleMetadata: {
    imports,
    declarations,
    providers: [],
  },
});

nodata.story = {
  name: 'no data',
}

export default story;
