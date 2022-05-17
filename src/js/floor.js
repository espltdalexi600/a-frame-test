AFRAME.registerComponent('floor', {
  init: function () {
  },
  events: {
    click: function (event) {
      const position = event.detail.intersection.point
      const entity = document.querySelector('[dog-model]')

      entity.setAttribute('position', {...position, y: 1})

      entity.setAttribute('visible', 'true')
      entity.setAttribute('animation-mixer', '')
    }
  }
})