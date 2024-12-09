import dotenv from 'dotenv';

dotenv.config();
// console.log(process.env);
export function env(name, defaultValue) {
  // console.log(name);
  const value = process.env[name];
  // console.log(value);

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
