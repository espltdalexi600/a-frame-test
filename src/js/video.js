AFRAME.registerComponent('video', {
  init: function () {
    const video = document.getElementById('video')
    video.play()
  },
  events: {
    click: function () {
      const video = document.getElementById('video')
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }
})