import trains from "./data";

const data = ['Rudasis', 'Juodasis', 'Brigada1'];

function App(props) {
    return (
        <>
        {trains.map((train) => 
            (<div>
            <img src={'/' + train.img} />
            <p>{train.desc}</p>
            </div>)
        )}
        {/* <Kvadratas bebras="Juodasis" />
        <Kvadratas bebras="Rudasis" />
        <Kvadratas bebras="Brigadininkas" /> */}
        </>

    );
} 

export default App ;

// namu darbas: github.com/A-Kija/vilkas 
// nuotrukas nupiesti su title. turi tureti responsive design