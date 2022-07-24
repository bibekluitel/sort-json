import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import "mutationobserver-shim";


const JEST_TIMEOUT = 30_000;

const ASYNC_UTIL_TIMEOUT = 15_000;

jest.setTimeout(JEST_TIMEOUT);

beforeAll(() => {
  configure({
    asyncUtilTimeout: ASYNC_UTIL_TIMEOUT,
  });
});