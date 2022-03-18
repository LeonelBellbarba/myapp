import React, {component, Component} from "react"

class Home extends Component{
    render(){
        return(
            // CajaPrincipal
            <div className = "CajaPrincipal">

                <div className = "Cabezera">
                    <h1>Informacion de Juegos</h1>

                </div>

                {/* Contenido */}
                <div className= "Contenido">

                        {/* PrimerJuego */}
                        <div className = "PrimerJuego">
                           
                            <img
                                src ={"../Images/imagen1.jpg"}
                                />

                            <ul className = "ListaCaja">
                                <li className = "Detalles"><span>Nombre:</span><br></br> God of War 4</li>

                                <li className = "Detalles"><span>Descripcion:</span><br></br> 
                                God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4.</li>

                                <li className = "Detalles"><span>Fecha de estreno:</span><br></br> 20 de abril de 2018</li>
                                <li className = "Detalles"><span>Diseñador:</span> <br></br>Jetpack Interactive, SIE Santa Monica Studio</li>
                                <li className = "Detalles"><span>Plataformas:</span><br></br> PlayStation 4, Microsoft Windows</li>

                            </ul>

                        
                            
                    
                            
                        </div>
                        {/* Fin PrimerJuego */}


                </div>
                    {/* FinContenido */}




            </div>
            // Fin de la Caja
        )
    }
}



export default Home