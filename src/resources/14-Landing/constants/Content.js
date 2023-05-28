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
      title: `Animation de portefeuille`,
      subtitle: `Testamento Detect est un nouvel outil d’animation de portefeuille avec un diagnostic ludique et informatif, permettant de comprendre les impacts de l’impréparation.`,
    },
    {
      cameraRailDist: 2,
      position: new THREE.Vector3(
        curvePoints[2].x + 3,
        curvePoints[2].y,
        curvePoints[2].z
      ),
      title: `Solution d'aide à la vente`,
      subtitle: `Testamento Optimizer est un outil d’aide à la vente 100% centré sur le besoin de vos clients structurant la démarche commerciale et boostant les ventes de tous les types de canaux de distribution.`,
    },
    {
      cameraRailDist: -2,
      position: new THREE.Vector3(
        curvePoints[3].x - 6,
        curvePoints[3].y,
        curvePoints[3].z
      ),
      title: `Gestion client`,
      subtitle: `Testamento Beneficiary est un outil de gestion et de désignation de bénéficiaires, à destination des conseillers et de vos clients, pour améliorer la satisfaction client et réduire vos coûts de gestion.`,
    },
    {
      cameraRailDist: 2,
      position: new THREE.Vector3(
        curvePoints[4].x + 3,
        curvePoints[4].y,
        curvePoints[4].z
      ),
      title: `Fidélisation`,
      subtitle: `Testamento Planner est un bouquet de 5 services grand public, pour comprendre et agir sur sa succession. A intégrer dans vos produits d’assurance ou à offrir à vos meilleurs clients.`,
    },
    {
      cameraRailDist: -2,
      position: new THREE.Vector3(
        curvePoints[5].x - 6,
        curvePoints[5].y,
        curvePoints[5].z
      ),
      title: `Pilot`,
      subtitle: `Description pilot`,
    },
  ];
};
