uniform float uTime;
uniform vec2 uResolution;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vec2 p = vUv - 0.5;
  float aspectRatio = uResolution.x / uResolution.y;
  p.x *= aspectRatio;

  float radius = 0.5;
  float dist = length(p);

  // Randomly displace vertices
  float displacement = sin(vPosition.x * vPosition.y * uTime) * 0.1;
  vec3 displacedPosition = vPosition + vNormal * displacement;

  // Calculate the gradient color
  vec3 color = vec3(
    smoothstep(0.0, 0.5, dist),
    0.0,
    smoothstep(0.5, 1.0, dist)
  );

  // Add a glossy coat
  float specular = smoothstep(0.3, 0.5, dist);
  color += vec3(specular);

  gl_FragColor = vec4(color, 1.0);
}