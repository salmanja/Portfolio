export default function TrailStop({trailStopClicked, setIsActivePanel , isActivePanel}:{setIsActivePanel: (isActivePanel: boolean) => void; trailStopClicked: () => void; isActivePanel: boolean}) {

    const handleStopClick = () => {
        trailStopClicked();
        setIsActivePanel(!isActivePanel);
    }
    return (
        <>
        <ambientLight />
        <pointLight position={[10,10,10]} intensity={1.5} />
        <mesh onClick={handleStopClick} rotation={[0,10,0]}>
            <boxGeometry attach="geometry" args ={[1,1,1]} />
            <meshStandardMaterial attach="material"
            color="yellow"/>
        </mesh>
        </>
    )
}