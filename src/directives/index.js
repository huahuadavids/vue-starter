/**
 * @author huahuadavids
 * @description all the directives
 *
 */
const directives = {
  /**
   *@description
   *@demo <div id="hook-arguments-example" v-demo:foo.a.b="message"></div> 
   */
  'my-directive' :{
    bind: function (el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    },
    inserted() {

    },
    update() {},
    componentUpdated() {},
    unbind() {}
  }


};


export default directives;
