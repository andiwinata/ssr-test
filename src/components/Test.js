import React from 'react';
import { callImport } from '../utils/a';

export const Test = () => {
  callImport();
  console.log('rendering hello');
  return <div>Hello</div>;
};
