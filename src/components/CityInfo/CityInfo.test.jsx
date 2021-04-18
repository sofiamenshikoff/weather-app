import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing

test("CityInfo render", async () => {
    //AAA

    //Arrange
    const city = "Buenos Aires"
    const country = "Argentina"
    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //En este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
    //Vamos a analizar su estado en el "Assert"
    //Vemos si lo que esperaba que se renderice se renderizo
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    
    //Act
    //findAllByRole nos va a buscar (en este caso) todos los componentes que sean
    //"heading" => H1, H2, H3,.. etc.
    //El resultado es un array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    //Asset
    //Cuando el test va a ser correcto?
    //DEFINICION:
    //Cuando el primer elemento (heading) se encuentre la ciudad "Buenos Aires"
    //y cuando en el segundo elemento se encuentre el pais Argentina

    //Se puede definir como yo espero que cityAndCountry
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    //Si estas condiciones se cumplen (expect), el test esta "ok"
   
})