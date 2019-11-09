import { action } from '@storybook/addon-actions';

import { declarations, imports } from '../../stories';
import { MessageService } from '../message.service';
import { MessagesComponent } from './messages.component';

const story = {
  title: 'messages',
};

export const component = () => ({
  moduleMetadata: {
    imports,
    declarations,
    providers: [{
      provide: MessageService,
      useFactory: () => {
        const service = new MessageService();
        service.messages = ['foo', 'bar'];
        return service;
      },
    }],
  },
  component: MessagesComponent,
  props: {},
});

component.story = {
  name: 'default',
}

export default story;
