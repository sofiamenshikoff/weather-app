import react from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'

test("ForecastItem render", async () => {
    //Arrange
    const { findByText } = render(<ForecastItem weekDay={"Lunes"} hour={10} temperature={23} state="clear"/>)

    //Act
    const weekDay = await findByText(/Lunes/)
    const hour = await findByText(/10/)
    const temperature = await findByText(/23/)

    //Assert
    expect(weekDay).toHaveTextContent("Lunes")
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("23°")

})
