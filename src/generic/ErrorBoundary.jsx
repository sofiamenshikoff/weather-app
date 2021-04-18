import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props) 

        this.state = {
            hasError: false
        }
    }

    //this.setState(getDerivedStateFromError(error))
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorInfo: ", errorInfo)
    }

    render() {
        return (
            this.state.hasError 
            ?
            <h1>Hubo un error</h1>
            :
            this.props.children
        )
    }
}

export default ErrorBoundary

// console.log('clase ErrorBoundary')
// console.log(ErrorBoundary)
// console.log('instancia ErrorBoundary')
// console.log(new ErrorBoundary())


// Componentes de clase
// estaActivo = () => {
//     return this.state.activo ? "Activo" : "No Activo"

// }

// onClickHandler = () => {
//     //incorrecto
//     //this.state.activo = true
//     //correcto
//     this.setState({ activo: true })

// }

// componentDidMount() {
//     console.log("El componente se ha montado")
// }

// componentDidUpdate(prevProps, prevState) {
//     console.log("Estado previo: ", prevState.activo)
//     console.log("Estado nuevo: ", this.state.activo)
//     console.log("El componente se ha actualizado")
// }

// componentWillUnmount() {
//     console.log("El componente se ha des-montado")
// }
// render(){
//     return (
//         <div>
//             <button onClick={this.onClickHandler}>
//                 Activar
//             </button>
//             <h1>
//                 ErrorBoundary {this.props.saludo}
//                 {
//                     this.estaActivo()
//                 }

//             </h1>
//         </div>
//     )
// }