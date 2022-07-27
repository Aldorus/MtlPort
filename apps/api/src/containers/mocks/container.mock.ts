import { randUuid, randFullName, randPost } from '@ngneat/falso';
import { Container } from '../models/container.model';

export const createContainer = (props: Partial<Container> = {}): Container => ({
  id: randUuid(),
  content: 'toto',
  ...props,
});

