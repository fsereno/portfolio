"use strict;"

export class WebGLCheckerUtil {

    static isWebGLAvailable() {

      try {

            var canvas = document.createElement( 'canvas' );
            return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

          } catch ( e ) {

              return false;

          }
    }

    static isWebGL2Available() {

        try {

            var canvas = document.createElement( 'canvas' );
            return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

        } catch ( e ) {

            return false;

        }
    }
}