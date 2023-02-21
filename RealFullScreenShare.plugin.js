/**
 * @name RealFullScreenShare
 * @author github.com/lullaby6
 * @description A real full screen for discord screen shares.
 * @version 0.0.2
 */

module.exports = class RealFullscreenShare {
    start() {

      document.addEventListener('keydown', e => {
          if(e.key === 'f') {
            document.querySelector('video').requestFullscreen()
          }
      });

    }

    stop() {}
}