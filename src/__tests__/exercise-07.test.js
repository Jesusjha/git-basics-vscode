const git = require("../../utils/git");

describe("exercise-07", () => {
  test("switch back to the master branch", async () => {
    let branches = await git.branch();

    expect(branches.current).toBe("master");

    expect(branches.all).toContain("master");
    expect(branches.all).toContain("develop");
  });
});
