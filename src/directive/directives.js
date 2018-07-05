/**
 * @author huahuadavids
 * @description all the directive.js
 *
 */
const directives = {
  /**
   *@description
   *@demo <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
   */
  'my-directive': {
    bind(el, binding, vnode) {
      const s = JSON.stringify
      const str =
        'name: ' + s(binding.name) + '\n' +
        'value: ' + s(binding.value) + '\n' +
        'expression: ' + s(binding.expression) + '\n' +
        'argument: ' + s(binding.arg) + '\n' +
        'modifiers: ' + s(binding.modifiers) + '\n' +
        'vnode keys: ' + Object.keys(vnode).join(', ');
      console.log(str)
    },
    inserted() {

    },
    update() {

    },
    componentUpdated() {

    },
    unbind() {

    }
  }


};


export default directives;
