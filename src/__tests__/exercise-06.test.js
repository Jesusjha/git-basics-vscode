const git = require("../../utils/git");

describe("exercise-06", () => {
  test("create a new branch named develop and create a commit", async () => {
    let [branches, count] = await Promise.all([
      git.branch(),
      git.raw(["rev-list", "develop", "^master", "--count"]),
    ]);

    expect(branches.current).toBe("develop");

    expect(branches.all).toContain("master");
    expect(branches.all).toContain("develop");

    let n = Number(count);

    expect(branches.current).toMatch(/develop/);
    expect(n).toEqual(1);
  });
});
