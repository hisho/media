import {Media} from "../src";

describe('Media', (): void => {
  describe('constructor', (): void => {
    test('create instance', (): void => {
      const media = new Media();
      expect(media).toBeDefined();
    });
  });
})
