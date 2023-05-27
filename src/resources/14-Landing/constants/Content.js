import * as THREE from "three";

export const Content = (curvePoints) => {
  return [
    {
      cameraRailDist: -2,
      position: new THREE.Vector3(
        curvePoints[1].x - 6,
        curvePoints[1].y,
        curvePoints[1].z
      ),
      title: `Lorem Ipsum`,
      subtitle: `Lorem Ipsum Dolor sit amet`,
    },
    {
      cameraRailDist: 2,
      position: new THREE.Vector3(
        curvePoints[2].x + 3,
        curvePoints[2].y,
        curvePoints[2].z
      ),
      title: `Lorem Ipsum`,
      subtitle: `Lorem Ipsum Dolor sit amet 2`,
    },
    {
      cameraRailDist: -2,
      position: new THREE.Vector3(
        curvePoints[3].x - 6,
        curvePoints[3].y,
        curvePoints[3].z
      ),
      title: `Lorem Ipsum`,
      subtitle: `Lorem Ipsum Dolor sit amet 3`,
    },
    {
      cameraRailDist: 2,
      position: new THREE.Vector3(
        curvePoints[4].x + 3,
        curvePoints[4].y,
        curvePoints[4].z
      ),
      title: `Lorem Ipsum`,
      subtitle: `Lorem Ipsum Dolor sit amet 4`,
    },
    {
      cameraRailDist: -2,
      position: new THREE.Vector3(
        curvePoints[5].x - 6,
        curvePoints[5].y,
        curvePoints[5].z
      ),
      title: `Lorem Ipsum`,
      subtitle: `Lorem Ipsum Dolor sit amet 5`,
    },
  ];
};
