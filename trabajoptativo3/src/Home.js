import React, {component, Component} from "react"

class Home extends Component{
    render(){
        return(
            // CajaPrincipal
            <div className = "CajaPrincipal">

                <div className = "Cabezera">
                    <h1>Producto: Juego</h1>

                </div>

                {/* Contenido */}
                <div className= "Contenido">

                        {/* PrimerJuego */}
                        <div className = "PrimerJuego">
                            <h1>Primer Juego Creado</h1>
                            <img
                                src ={"../Images/imagen1.jpg"}
                                />

                            <ul className = "ListaCaja">
                                <li className = "Detalles"><span>Nombre:</span> OXO</li>

                                <li className = "Detalles"><span>Descripcion:</span><br></br> 
                                OXO es un videojuego desarrollado por AS Douglas en 1952 que simula un juego de ceros y cruces. Fue uno de los primeros juegos desarrollados en la historia temprana de los videojuegos. Douglas programó el juego como parte de una tesis sobre la interacción humano-computadora en la Universidad de Cambridge.</li>

                                <li className = "Detalles"><span>Fecha de estreno:</span> 1952</li>
                                <li className = "Detalles"><span>Diseñador:</span> Sandy Douglas</li>
                                <li className = "Detalles"><span>Modo:</span> Videojuego de un jugador</li>

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