const NovedadesPage = (props) => {
    return (
        <main className="holder">
            <h2 style={{ textAlign: 'center'}}>Departamento y Monoambiente</h2>
            <div className="galeria">
                <img src="images/depto1.jpeg" alt="foto" style={{width: '50%', heigth: 'auto'}}/>
                <img src="images/depto2.jpeg" alt="foto" style={{width: '50%', heigth: 'auto'}} />
                <img src="images/depto3.jpeg" alt="foto" style={{width: '50%', heigth: 'auto'}}/>
                <img src="images/mono1.jpeg" alt="foto" style={{width: '50%', heigth: 'auto'}}/>
                <img src="images/mono2.jpeg" alt="foto" style={{width: '50%', heigth: 'auto'}}/>
            </div>
        
    </main>
    );
}

export default NovedadesPage;