import '../styles/components/pages/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                 <h2>Por Persona</h2>
                 <p>El precio es por cantidad de personas.</p>
                 <p>Los/as niños/as abonan a partir de los 4 años.</p>
                 <p>Se puede abonar en efectivo o por transferencia.</p>
            </div>
            <div className="staff">
                <h2>Precios</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/signo.png" alt="imgagen" />
                        <h5>1 Persona</h5>
                        <h6>$20.000</h6>
                        <p>Efectivo o transferencia.</p>
                    </div>
                    <div className="persona">
                        <img src="images/signo.png" alt="imagen" />
                        <h5>2 Personas</h5>
                        <h6>$30.000</h6>
                        <p>Efectivo o transferencia.</p>
                    </div>
                    <div className="persona">
                        <img src="images/signo.png" alt="imagen" />
                        <h5>3 Personas</h5>
                        <h6>$35.000</h6>
                        <p>Efectivo o transferencia</p>
                    </div>
                    <div className="persona">
                        <img src="images/signo.png" alt="imagen" />
                        <h5>4 Personas</h5>
                        <h6>$40.000</h6>
                        <p>Efectivo o transferencia</p>
                    </div>
                    <div className="persona">
                        <img src="images/signo.png" alt="imagen" />
                        <h5>5 Personas</h5>
                        <h6>$45.000</h6>
                        <p>Efectivo o transferencia</p>
                    </div>
                    <div className="persona">
                        <img src="images/signo.png" alt="imagen" />
                        <h5>6 Personas</h5>
                        <h6>$50.000</h6>
                        <p>Efectivo o transferencia</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default NosotrosPage;