import path from 'path';
import { fileURLToPath } from 'url';

// 项目根目录
export const __root = path.dirname(fileURLToPath(import.meta.url));

// src目录
export const __src = path.join(__root, 'src');
