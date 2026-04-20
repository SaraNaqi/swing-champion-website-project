import { html, fixture, expect } from '@open-wc/testing';
import "../swing-champions-arena.js";

describe("SwingChampionsArena test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <swing-champions-arena
        title="title"
      ></swing-champions-arena>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
