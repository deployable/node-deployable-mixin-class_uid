const uuid = require('uuid')
const {Mixin} = require('mixwith')

module.exports = Mixin((superclass) => class MixinClassUid extends superclass {

  static generateUuid ( version = 'v4') {
    return uuid[version]()
  }

  constructor (...args) {
    super(...args)
    this.class_uid = uuid.v4()
  }

  get class_uid () {
    return this._class_uid
  }

  set class_uid (uuid) {
    return this._class_uid = uuid
  }

  generateUuid ( ...args ) {
    return this.constructor.generateUuid( ...args )
  }

})
