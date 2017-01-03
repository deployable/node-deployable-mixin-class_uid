# [deployable-mixin-class-uuid](https://github.com/deployable/deployable-mixin-class-uuid)

Node Class UUID Mixin

Attach a UUID to a class as `class_uid` and add `generateUuid()` helper functions

## Install
 
    npm install deployable-mixin-class_uid --save

    yarn add deployable-mixin-class_uid

## Usage

```javascript

const mix = require('mixwith').mix
const MixinClassUid = require('deployable-mixin-class_uid')
class SomeMix = {}
class Some extends mix(SomeMix).with(MixinClassUid) {}

let obj = new Some()
console.log(obj.class_uid)
console.log(obj.generateUuid())

```

## API

### `Class.generateUuid(version)`

Static method to generate a uuid. Pass a version `v1` or `v4`

### `.class_uid`

Get or set the uid on the class via a property

### `.generateUuid(version)`

Instance method to generate a uuid. Pass a version `v1` or `v4`

## License

deployable-mixin-class_uid is released under the MIT license.
Copyright 2016 Matt Hoyle <code at deployable.co>

https://github.com/deployable/deployable-mixin-class_uid

