import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";


const JEST_TIMEOUT = 30_000;

const ASYNC_UTIL_TIMEOUT = 15_000;

jest.setTimeout(JEST_TIMEOUT);

beforeAll(() => { 
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  configure({
    asyncUtilTimeout: ASYNC_UTIL_TIMEOUT,
  });
});