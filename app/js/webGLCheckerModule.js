export const WebGLCheckerModule = (() => {

    let isWebGLAvailable = () => {

      try {

            var canvas = document.createElement( 'canvas' );
              return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

          } catch ( e ) {

              return false;

          }

    }

    let isWebGL2Available = () => {

          try {

              var canvas = document.createElement( 'canvas' );
              return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

          } catch ( e ) {

              return false;

          }

    }

    return {
      isWebGLAvailable: isWebGLAvailable,
      isWebGL2Available: isWebGL2Available,
    }
})();