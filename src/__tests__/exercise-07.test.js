const git = require("../../utils/git");

describe("exercise-07", () => {
  test("switch back to the main branch", async () => {
    let branches = await git.branch();

    expect(branches.current).toBe("main");

    expect(branches.all).toContain("main");
    expect(branches.all).toContain("develop");
  });
});
