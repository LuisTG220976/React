import { useState } from "react";
const FormRgister=()=>{
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const handleInputName =(e) => {
        setNombre(e.target.value);
    };
    const handleInputApellido=(e)=>{
        setApellido(e.target.value)
    };
    return(
        <div>
            <form>
                <h4> Formulario de Registro</h4>
                <h4>Nombre {nombre}</h4>
                <h4>Apellido {apellido}</h4>
                <p>
                   <input type="text" onChance={handleInputName} placeholder="ingrese su nombre"/>
                </p>
                <p>
                   <input type="text" onChance={handleInputApellido} placeholder="ingrese su Apellido"/>
                </p><p>
                   <input type="text" placeholder="ingrese su Email"/>
                </p>
                <p>
                   <button type="submit">Registrar</button>
                </p>
             
                
            </form>
        </div>
    )
}

export default FormRgister;