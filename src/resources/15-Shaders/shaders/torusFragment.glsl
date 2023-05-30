varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPattern;

uniform float uTime;

void main() {
  gl_FragColor = vec4(vec3(pattern) , 1.0);
}