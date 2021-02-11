# MEDIA

# INSTALLATION

```shell script
$ npm i @hisho/media
```

# USAGE

- query: `string`
- options? `object`   
```typescript
type MediaOptions = {
  mach?: () => void,
  unMatch?: () => void,
}
```

```typescript
import {Media} from "@hisho/media";

const media = new Media(`(min-width: ${800 / 16}em)`, {
  mach: () => console.log('mach!'),
  unMatch: () => console.log('un mach!'),
});

```

# API

- type: `'mach' | 'unMach'`
- callback: `() => void`

## on
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.on('mach', () => {
  //register callback funciton when media mach
});

media.on('unMach', () => {
  //register callback funciton when media un mach
});
```

## isMatch
return `boolean`
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.isMatch() // true or false
```

## register
register eventListener
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.register();
```

## unregister
un register eventListener
```typescript
const media = new Media(`(min-width: ${800 / 16}em)`);

media.unregister();
```
