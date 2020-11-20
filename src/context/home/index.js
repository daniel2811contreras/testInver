import React, { createContext , useState } from 'react'

const HomeContext = createContext()
const { Provider, Consumer } = HomeContext

const HomeProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'Camila',
        rol: 'estratega',
        bill: {
            balance: '1570000',
            investment: '1600000',
            performance: '-30000',
        }
    })
    const [goals, setGoals] = useState([
        {label: 'Viaje a Islas Canarias', saving: '1630000', goalTotal: '8000000', img: require('../../../assets/img/goalicon1.png') },
        {label: 'Macbook Pro', saving: '0', goalTotal: '7000000', img: require('../../../assets/img/goalicon2.png') },
    ])
    const [briefcase, setBriefcase] = useState({ text: 'Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.',
     briefcase:[
        { img: require('../../../assets/img/bot.png'), name: 'RoboAdvisor', money: '10 Fondos', progress: 15, info: {
            logo: require('../../../assets/img/skandia.png'), name: 'FIC Old Mutual Efectivo', descript: 'Tipo de activo', balance: 240000, type: 'Renta fija Depósito a la fija', 
        } },
        { img: require('../../../assets/img/bot.png'), name: 'RoboAdvisor', money: '10 Fondos', progress: 15, info: {
            logo: require('../../../assets/img/skandia.png'), name: 'FIC Old Mutual Efectivo', descript: 'Tipo de activo', balance: 240000, type: 'Renta fija Depósito a la fija', 
        } },
    ]})
    const [saving, setSaving] = useState({ 
        article: [
            {img: require('../../../assets/img/blog1.png'), title: '10 gastos que debes evitar', text: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'},
            {img: require('../../../assets/img/blog2.png'), title: '10 gastos que debes evitar', text: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'},
            {img: require('../../../assets/img/blog3.png'), title: '10 gastos que debes evitar', text: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'},
        ],
        carusel: [
            {img: require('../../../assets/img/thumb.png'), title: 'Esto es AHORRO', text: 'Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.' },
            {img: require('../../../assets/img/thumb.png'), title: 'Esto es AHORRO', text: 'Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.' },
            {img: require('../../../assets/img/thumb.png'), title: 'Esto es AHORRO', text: 'Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.' },
        ]
    })

    const [paginationSaving, setPaginationSaving] = useState(0)

    return(
        <Provider value={{
            user, setUser,
            goals, setGoals,
            briefcase, setBriefcase,
            saving, setSaving,
            paginationSaving, setPaginationSaving
        }}>
            {children}
        </Provider>
    )
}

export { HomeProvider, Consumer as HomeConsumer, HomeContext }