import { readFileSync } from 'fs';
import { join } from 'path';

export function readDemoData<T>(fileName: string): T {
  const filePath = join(process.cwd(), 'public', 'data', fileName);
  return JSON.parse(readFileSync(filePath, 'utf8')) as T;
}
