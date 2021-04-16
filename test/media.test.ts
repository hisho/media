import Media from "../src";

describe('Media', (): void => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
  });

  describe('constructor', (): void => {
    test('create instance', (): void => {
      const media = new Media(`(min-width: ${800 / 16}em)`);
      expect(media).toBeDefined();
      expect(media.on).toBeDefined();
      expect(media.register).toBeDefined();
      expect(media.unregister).toBeDefined();
      expect(media.isMatch).toBeDefined();
    });
  });

})
