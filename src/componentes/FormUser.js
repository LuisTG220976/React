import { useState } from "react";
const FormUser = () => {
    const [valorDeInputs, setValorInputs] = useState ({
        nombre:"",
        apellido:"",
        correo:"",
        password:"",

    });
    const handleInputValues=(e)=>{
        const {name,value} = e.target;

        setValorInputs({
            valorDeInputs,
            [name]:value,}
        )
        }

    }

    return(
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nombre:</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Apellido:</label>
                <input type="text" class="form-control"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email:</label>
                <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password:</label>
                <input type="password" class="form-control" />
            </div>
        </form>
    </div>        
    );


export default FormUser;