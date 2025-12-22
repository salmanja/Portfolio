function FloorPane () {

const groundColor = "#8B4513"; // Brown color for the floor  CHANGE THIS  
return (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color={groundColor}  />
  </mesh>
);
}
export default FloorPane;