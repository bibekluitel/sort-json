import { useContext } from 'react';
import { AppConfig } from '../../types/AppContext.types';
import {AppContext} from './../../context/AppContext';

export const useAppContext = (): AppConfig=> useContext(AppContext).config;