import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import familia from "../assets/familia.png"
import plantacion2 from "../assets/plantacion2.png"
import recursoshumanos from "../assets/recursoshumanos.png"
import trabjador from "../assets/trabjador.png"
export default function Nosotros(){
    return (
        <section className="flex  text-texto w-full justify-center gap-20 flex-col items-center relative text-center font-medium mt-32  text-lg font-montserrat">
            <div className="w-full">
           

                <h1 className="text-4xl text-center text-black font-newsreader w-[300px] m-auto">Encantos y aromas del café sevillano</h1>
                <img height="185px"  width="185px" className="float-left" src = {image3}></img>
                <p className="w-[1000px]  font-bold float-center  mt-4 text-4xl ml-[350px] text-left"> El mundo ha saboreado la magia del Café de Colombia por generaciones. Reconocido por su inigualable calidad y delicadeza, ha trascendido fronteras, convirtiéndose en un emblema global. Descubre la esencia pura de un café Colombiano auténtico. Presentamos el Café GÓMEZ MORA de Sevilla, Colombia: una joya que ha conquistado corazones en su tierra natal y que ahora se prepara para encantar paladares alrededor del mundo.</p>
            </div>
            <div className="w-full flex flex-col justify-center gap-11">
                <div className="container flex items-center">
                <img width="300px" height="3f00px" className="float-left" src={image4}></img>
                <p className="ml-[400px] w-[300px] font-newsreader text-4xl text-black font-bold ">Legado familiar, la esencia de nuestra región</p>
                </div>
                <div className="flex items-center w-full gap-24">
                <p className="text-4xl text-center w-[850px] ml-4  font-bold ">En el paisaje sereno, la familia GÓMEZ MORA ha perfeccionado el cultivo del café a lo largo de generaciones, convirtiéndose en un referente en la región y en Colombia. Reconociendo que su éxito se debe a su comunidad, GÓMEZ MORA prioriza el bienestar de sus empleados y vecinos, promoviendo empleo y desarrollo. Es su visión contemporánea de responsabilidad </p>
                <img className="" src={familia}></img>
                </div>
               
            </div>
            <div className="mr-52">
                <img className="relative top-[300px] left-[1200px]" src={trabjador}></img>
                <h1 className="font-newsreader w-[350px] m-auto text-black font-bold text-4xl">Café: arte y tradición en cada taza</h1>
                <p className="text-4xl  w-[1200px] mr-52 p-4 font-montserrat font-bold">En las colinas de Sevilla, chapoleras en trajes coloridos y campesinos recolectan a mano granos de café rojo bajo el atardecer. Estos granos se lavan con agua pura de manantiales locales y se secan al sol hasta convertirse en "café pergamino". Tras el trillado, se transforman en el conocido "café verde" o "Green Coffee". Finalmente, campesinas seleccionan cuidadosamente cada grano al ritmo de canciones tradicionales, antes de empacarlos en sacos de fique local.</p>
                <div className="relative  ">
                    <img src={plantacion2}></img>
                </div>
                <img width="250px" className="relative top-[-200px] left-[1350px]" src={recursoshumanos}></img>
            </div>
           
        </section>
    )
}