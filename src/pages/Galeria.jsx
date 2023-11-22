import collage1 from "../assets/collage1.png"
import collage2 from "../assets/collage2.png"
import collage3 from "../assets/collage3.png"
import collage4 from "../assets/collage4.png"
import collage5 from "../assets/collage5.png"

export default function Galeria(){
    return (
        <div className="flex justify-center items-center w-100 h-screen">
            <div className="pt-5 w-full grid grid-cols-5 grid-rows-2">
                <div  style={{
                            
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                      backgroundImage: `url(${collage1})`,
                }} className="col-span-2 w-full h-[400px] ">

                </div> 
                <div className="row-span-2" style={{
                            
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                      backgroundImage: `url(${collage2})`,
                }}>

                </div>
                <div className="col-span-2 row-span-2" 
                style={{
                            
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
              backgroundImage: `url(${collage3})`,
        }}>

                </div>
                <div style={{
                            
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                      backgroundImage: `url(${collage4})`,
                }}>

                </div>
                <div style={{
                            
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                      backgroundImage: `url(${collage5})`,
                }}>

                </div>
            </div>
            {/* 
            <div className="w-full grid grid-cols-3 grid-rows-2">
                    <div className="col-span-2">
                        <img src ={collage1}></img>
                    </div>
                    <div className="row-span-2">
                        <img src={collage2}></img>
                    </div>
                    <div className="col-span-3 row-span-2">
                    <img src={collage3}></img>
                    </div>
                    <div>
                        <img src={collage4}></img>
                    </div>
                    <div>
                        <img src={collage5}></img>
                    </div>

            </div>
            */}
        </div>
    )
}