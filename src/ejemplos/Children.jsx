
/* para que EjemploChildren funcione, tengo que llevar el componente a App y dentro del componente incluir lo que quiera que sea children(que se muestr dentro del componente) */

const EjemploChildren = (props) => {



    return (
        <div className="ConteinerChildren m-auto py-4">
            {props.children}
        </div>
    )
}

export default EjemploChildren;