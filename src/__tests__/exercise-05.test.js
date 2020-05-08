const git = require("../../utils/git");

describe("exercise-05", () => {
  test("use the git plugin to discard all the changes made to a file", async () => {
    let status = await git.status();

    expect(status.staged).not.toContain("src/exercises/exercise-03-a.txt");
    expect(status.modified).not.toContain("src/exercises/exercise-03-a.txt");
  });
});
