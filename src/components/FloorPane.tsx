function FloorPane () {

return (
  <mesh rotation={[-Math.PI / 2, 0,0 ]} position={[0, -2, 0]} receiveShadow>
    <planeGeometry args={[5, 5]} />
    <meshStandardMaterial color="#303b00" />
  </mesh>
);
}
export default FloorPane;