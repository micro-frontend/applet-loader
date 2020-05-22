import { sha1 as _sha1 } from 'hash.js';

export function sha1(url: string): string {
  return _sha1().update(url).digest('hex');
}
