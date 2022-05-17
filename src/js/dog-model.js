AFRAME.registerComponent('dog-model', {
  init: function () {
    this.el.addEventListener('model-loaded', () => {
      const obj = this.el.getObject3D('mesh')
      console.log(obj)
    })
  }
})