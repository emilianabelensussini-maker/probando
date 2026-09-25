import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/portada1.jpg" alt="portada"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Reservas</h2>
                    <p> Las reservas se reciben con un máximo de 7 días de anticipación, con abono del 50% del total. </p>
                </div>
                <div className="testimonios right">
                    <h2>Horarios</h2>
                    <div className="testimonio">
                        <span class="cita">Ingreso: 18:00hs a 22:00hs</span>
                    <span class="cita">Egreso: 14:00hs</span>
                    <span class="autor">Cuando se reserva se puede acordar un horario de ingreso anterior a las 18:00hs de ser necesario, pero en ningún caso se puede ingresar después de las 22:hs</span>
                    </div>
                </div>
            </div>  
        </main>
    )
}
export default HomePage;