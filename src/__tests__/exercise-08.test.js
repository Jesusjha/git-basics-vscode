const git = require("../../utils/git");
const BASE_REMOTE = require("../../utils/baseRemote");

describe("exercise-08", () => {
  test("use the git plugin to push the repository to code.assembler", async () => {
    let [branches, remotes, status] = await Promise.all([
      git.branch(),
      git.getRemotes(true),
      git.status(),
    ]);

    expect(status.current).toBe("master");
    expect(status.tracking).toBe("origin/master");
    expect(branches.branches.hasOwnProperty("remotes/origin/master")).toBe(
      true
    );

    expect(branches.branches.master.commit).toBe(
      branches.branches["remotes/origin/master"].commit
    );

    expect(branches.all).toContain("master");
    expect(branches.all).toContain("remotes/origin/master");

    expect(remotes).toHaveLength(1);
    expect(remotes[0].name).toBe("origin");
    expect(remotes[0].refs.fetch).not.toBe(BASE_REMOTE);
    expect(remotes[0].refs.push).not.toBe(BASE_REMOTE);
  });
});
