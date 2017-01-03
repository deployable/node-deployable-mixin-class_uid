const debug = require('debug')('dply:test:unit:mixin_class_uid')
const MixinClassUid = require('../lib/mixin_class_uid')
const mix = require('mixwith').mix


describe('Unit::MixinClassUid', function () {

  describe('Instances Mixin', function(){

    class InstancesTestMix {}
    class InstancesTest extends mix(InstancesTestMix).with(MixinClassUid) {}
    let instances_test = null
    let uuid_re = /^[a-f0-9-]{36}$/

    beforeEach(function(){
      instances_test = new InstancesTest()
    })

    it('should create an instance', function(){
      expect( instances_test ).to.be.a.instanceOf( InstancesTest )
    })

    it('should have a uid', function(){
      expect( instances_test.class_uid ).to.match(uuid_re)
    })

    it('should set', function(){
      expect( instances_test.class_uid  = 5 ).to.eql( 5 )
      expect( instances_test.class_uid ).to.eql( 5 )
    })

    it('generate a new uuid from class', function(){
      expect( InstancesTest.generateUuid() ).to.match(uuid_re)
    })

    it('generate a new uuid from class instance', function(){
      expect( instances_test.generateUuid() ).to.match(uuid_re)
    })

  })


})
