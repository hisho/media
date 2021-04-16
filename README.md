# Media

## Features

## Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

```shell script
$ npm i @hisho/media
```

## Usage

new Media()
query - `string`

```typescript
import Media from "@hisho/media";

const media = new Media(`(min-width: ${800 / 16}em)`, {
  mach: () => console.log('mach!'),
  unmatch: () => console.log('un mach!'),
});
```

### options

new Media(`(min-width: ${800 / 16}em)`, options);

- options? `object`   
```typescript
type MediaOptions = {
  mach?: () => void,
  unMatch?: () => void,
}
```

## API

- type: `'mach' | 'unmach'`
- callback: `() => void`

### on
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.on('mach', () => {
  //register callback funciton when media mach
});

media.on('unmach', () => {
  //register callback funciton when media un mach
});
```

### isMatch
return `boolean`
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.isMatch() // true or false
```

### register
register eventListener
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.register();
```

### unregister
un register eventListener
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.unregister();
```


## License

[MIT © hisho](./LICENSE)
