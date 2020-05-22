import { v4 } from 'uuid';

export function nextId(): string {
  return v4().replace(/-/g, '');
}
