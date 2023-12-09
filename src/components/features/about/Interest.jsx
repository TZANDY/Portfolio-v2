export default function  Interest () {
    return(
        <div>
            
                <div className="col">
                    <h3>Intereses</h3>
                    <div className="container-interest">
                        <div className="interest">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/counter-strike.png" alt="counter-strike" />
                            <span> JUEGOS</span>
                        </div>
                        <div className="interest">
                            <i className="fa-solid fa-headphones"></i>
                            <span> MÚSICA</span>
                        </div>
                        <div className="interest">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span> DEPORTE</span>
                        </div>
                        <div className="interest">
                            <i className="fa-solid fa-microchip"></i>
                            <span> TECNOLOGÍA </span>
                        </div>
                        <div className="interest">
                            <i className="fa-solid fa-atom"></i>
                            <span> CIENCIA </span>
                        </div>
                        <div className="interest">
                            <i className="fa-solid fa-book"></i>
                            <span> LIBROS</span>
                        </div>
                        <button>
                                Descargar CV<i className="fa-solid fa-download"></i>
                                <span className="overlay">
        
                                </span>
                            </button>
                    </div>

                </div>
        </div>
    )
}