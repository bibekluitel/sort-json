export const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line @typescript-eslint/no-require-imports, node/global-require, node/no-missing-require, unicorn/prefer-module -- necessary for bundle splitting
        return "http://localhost:3000";
    }
}