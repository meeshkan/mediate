const onLoad = require("../scripts/onLoad");
const unmock = require("unmock-node").unmock;

beforeEach(
  async () =>
    await unmock({
      whitelist: ["accounts.spotify.com"]
    })
);

test("Token must be defined", async () => {
  const token = await onLoad();
  console.log(token);
  expect(token).toBeDefined();
});

test("Token cannot be empty", async () => {
  const token = await onLoad();
  expect(token).not.toEqual("");
});
