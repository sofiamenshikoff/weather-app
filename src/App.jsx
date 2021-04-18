import React from 'react'
import { BrowserRouter as Router, 
    Switch, 
    Route, 
} from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import WelcomPage from './pages/WelcomePage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'

export const App = () => {


    
    /*
    const [allWeather, setAllWeather] = useState({})
    const [allCharData, setAllCharData] = useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})
    
    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => {
            return ({...allWeather, ...weatherCity})
        })//weatherCity es el weatherAux de useCityList
    }, [setAllWeather])

    const onSetCharData = useCallback(
        (charDataCity) => {
            setAllCharData(charData => ({...charData, ...charDataCity}))
        },
        [setAllCharData]
    )

    const onSetForecastItemList = useCallback(
        (forecastItemListCity) => {
            setAllForecastItemList(forecastItemList => ({...forecastItemListCity, ...forecastItemList}))
        },
        [setAllForecastItemList]
    )



    const actions = useMemo(() => (
        {
            onSetAllWeather,
            onSetCharData, 
            onSetForecastItemList
        }
    ), [onSetAllWeather, onSetCharData, onSetForecastItemList])

    const data = useMemo(() => (
        {
            allWeather,
            allCharData,
            allForecastItemList
        }
    ), [allWeather, allCharData, allForecastItemList])

    */

    return (   
        <WeatherContext>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomPage/>    
                    </Route>
                    <Route path="/main">
                        <MainPage/>
                    </Route>
                    <Route path="/city/:countryCode/:city">
                        <CityPage/>
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router> 
        </WeatherContext>
        
    ) 
}

export default App
