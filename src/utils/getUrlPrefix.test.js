import { getUrlPrefix } from "./getUrlPrefix";

describe("getUrlPrefix() test", () => {
  it("should give proper backend url", () => {
    const expectedUrl = `https://always-shopping-backend.sanketdhabarde.repl.co`;

    const url = getUrlPrefix();

    expect(url).toBe(expectedUrl);
  });
});
