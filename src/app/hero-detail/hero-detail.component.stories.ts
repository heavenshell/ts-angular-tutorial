import { action } from '@storybook/addon-actions';

import { declarations, imports } from '../../stories';
import { HeroDetailComponent } from './hero-detail.component';

const story = {
  title: 'hero-detail',
};

const hero = { id: '1', name: 'foo' };

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations,
    providers: [],
  },
  component: HeroDetailComponent,
  props: {
    hero,
    getHero: () => {},
    add: (name: string) => {
      action('add')(name);
    },
    save: () => {
      action('save')(hero);
    },
    goBack: () => {
      action('go back')();
    }
  },
});

component.story = {
  name: 'default',
}

export const nodata = () => ({
  component: HeroDetailComponent,
  props: {
    heroes: [],
    add: (name: string) => {
      action('add')(name);
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
