function FloorPane() {

  return (
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
        scale={[0.5, 2.0, 1.0]}
        receiveShadow
      >
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color="#303b00" />
      </mesh>
  );
}
export default FloorPane;
