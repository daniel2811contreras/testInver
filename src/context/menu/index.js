import React, { createContext , useState } from 'react'
import { faEllipsisH, faHome, faList, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const MenuContext = createContext()
const { Provider, Consumer } = MenuContext

const MenuProvider = ({children}) => {
    const [menu, setMenu] = useState([
        {icon: faHome , label: 'Inicio', order: 1 },
        {icon: faList , label: 'Historial', order: 2 },
        {icon: faPlus , label: 'Ahorrar', order: 3 , blue: true },
        {icon: faUserCircle , label: 'Mi perfil', order: 4 },
        {icon: faEllipsisH , label: 'Más', order: 5 },
    ])
    const [active, setActive] = useState('Inicio')

    return(
        <Provider value={{
            menu, setMenu,
            active, setActive
        }}>
            {children}
        </Provider>
    )
}

export { MenuProvider, Consumer as MenuConsumer, MenuContext }
