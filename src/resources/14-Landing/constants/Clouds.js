import * as THREE from "three";

export const Clouds = (curvePoints) => {
  return [
    // Initial
    {
      position: new THREE.Vector3(
        curvePoints[0].x + 12,
        curvePoints[0].y + 12,
        curvePoints[0].z - 148
      ),
      rotation: new THREE.Euler(-Math.PI * 0.25, Math.PI * 0.25, 0),
    },
    {
      position: new THREE.Vector3(
        curvePoints[0].x - 12,
        curvePoints[0].y - 12,
        curvePoints[0].z - 148
      ),
      rotation: new THREE.Euler(Math.PI * 0.25, -Math.PI * 0.25, 0),
      scale: 80,
    },
    {
      position: new THREE.Vector3(
        curvePoints[0].x - 16,
        curvePoints[0].y + 6,
        curvePoints[0].z - 100
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, 0, -Math.PI * 0.5),
      scale: 150,
    },

    // First
    {
      position: new THREE.Vector3(
        curvePoints[1].x + 12,
        curvePoints[1].y + 12,
        curvePoints[1].z - 10
      ),
      rotation: new THREE.Euler(-Math.PI * 0.25, Math.PI * 0.25, 0),
    },
    {
      position: new THREE.Vector3(
        curvePoints[1].x - 12,
        curvePoints[1].y + 6,
        curvePoints[1].z
      ),
    },
    {
      position: new THREE.Vector3(
        curvePoints[1].x + 14,
        curvePoints[1].y - 6,
        curvePoints[1].z - 10
      ),
      rotation: new THREE.Euler(-Math.PI * 0.5, 0, -Math.PI * 0.25),
      scale: 150,
    },

    // Second
    {
      position: new THREE.Vector3(
        curvePoints[2].x - 95,
        curvePoints[2].y - 40,
        curvePoints[2].z + 150
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, Math.PI * 0.2, 0),
      scale: 500,
    },
    {
      position: new THREE.Vector3(
        curvePoints[2].x + 24,
        curvePoints[2].y + 24,
        curvePoints[2].z + 120
      ),
      rotation: new THREE.Euler(0, 0, 0),
      scale: 600,
    },
    {
      position: new THREE.Vector3(
        curvePoints[2].x - 12,
        curvePoints[2].y + 6,
        curvePoints[2].z - 12
      ),
      rotation: new THREE.Euler(0, 0, 0),
    },
    {
      position: new THREE.Vector3(
        curvePoints[2].x + 12,
        curvePoints[2].y - 6,
        curvePoints[2].z
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, 0, -Math.PI * 0.5),
    },

    // Third
    {
      position: new THREE.Vector3(
        curvePoints[3].x + 150,
        curvePoints[3].y - 60,
        curvePoints[3].z + 110
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, -Math.PI * 0.25, 0),
      scale: 600,
    },
    {
      position: new THREE.Vector3(
        curvePoints[3].x,
        curvePoints[3].y + 24,
        curvePoints[3].z + 120
      ),
      rotation: new THREE.Euler(0, 0, 0),
      scale: 600,
    },
    {
      position: new THREE.Vector3(
        curvePoints[3].x + 160,
        curvePoints[3].y + 6,
        curvePoints[3].z + 150
      ),
      rotation: new THREE.Euler(0, Math.PI * 0.33, 0),
      scale: 250,
    },
    {
      position: new THREE.Vector3(
        curvePoints[3].x - 12,
        curvePoints[3].y + 6,
        curvePoints[3].z - 12
      ),
      rotation: new THREE.Euler(0, 0, 0),
    },
    {
      position: new THREE.Vector3(
        curvePoints[3].x + 12,
        curvePoints[3].y - 6,
        curvePoints[3].z
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, 0, -Math.PI * 0.5),
    },

    // Forth
    {
      position: new THREE.Vector3(
        curvePoints[4].x - 95,
        curvePoints[4].y - 40,
        curvePoints[4].z + 150
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, Math.PI * 0.2, 0),
      scale: 500,
    },
    {
      position: new THREE.Vector3(
        curvePoints[4].x + 24,
        curvePoints[4].y + 24,
        curvePoints[4].z + 120
      ),
      rotation: new THREE.Euler(0, 0, 0),
      scale: 600,
    },
    {
      position: new THREE.Vector3(
        curvePoints[4].x - 12,
        curvePoints[4].y + 6,
        curvePoints[4].z - 12
      ),
      rotation: new THREE.Euler(0, 0, 0),
    },
    {
      position: new THREE.Vector3(
        curvePoints[4].x + 12,
        curvePoints[4].y - 6,
        curvePoints[4].z
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, 0, -Math.PI * 0.5),
    },
    {
      position: new THREE.Vector3(
        curvePoints[4].x + 12,
        curvePoints[4].y - 6,
        curvePoints[4].z
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, 0, -Math.PI * 0.5),
    },

    // Fifth
    {
      position: new THREE.Vector3(
        curvePoints[5].x + 150,
        curvePoints[5].y - 60,
        curvePoints[5].z + 110
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, -Math.PI * 0.25, 0),
      scale: 600,
    },
    {
      position: new THREE.Vector3(
        curvePoints[5].x,
        curvePoints[5].y + 24,
        curvePoints[5].z + 120
      ),
      rotation: new THREE.Euler(0, 0, 0),
      scale: 600,
    },
    {
      position: new THREE.Vector3(
        curvePoints[5].x + 160,
        curvePoints[5].y + 6,
        curvePoints[5].z + 150
      ),
      rotation: new THREE.Euler(0, Math.PI * 0.33, 0),
      scale: 250,
    },
    {
      position: new THREE.Vector3(
        curvePoints[5].x - 12,
        curvePoints[5].y + 6,
        curvePoints[5].z - 12
      ),
      rotation: new THREE.Euler(0, 0, 0),
    },
    {
      position: new THREE.Vector3(
        curvePoints[5].x + 12,
        curvePoints[5].y - 6,
        curvePoints[5].z
      ),
      rotation: new THREE.Euler(-Math.PI * 0.75, 0, -Math.PI * 0.5),
    },
    {
      position: new THREE.Vector3(
        curvePoints[5].x + 68,
        curvePoints[5].y - 50,
        curvePoints[5].z - 110
      ),
      rotation: new THREE.Euler(Math.PI * 0.75, -Math.PI * 0.25, Math.PI),
      scale: 1000,
    },
    {
      position: new THREE.Vector3(
        curvePoints[5].x,
        curvePoints[5].y + 24,
        curvePoints[5].z - 120
      ),
      rotation: new THREE.Euler(0, 0, 0),
      scale: 250,
    },
  ];
};
