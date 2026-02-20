import { useContext } from 'react';
import { ColorContext } from './ColorContextDefinition';

export const useColor = () => useContext(ColorContext);
