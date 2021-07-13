import { 
    LearningPage,
    EditInformationPage

} from "./pages"
import queryString from "query-string"

export const routeName = {
    learning: "/learning",
    editInformation:"/edit-info" 
}

export default [
    {
        path: routeName.learning,
        component: LearningPage
    },
    {
        path: routeName.editInformation,
        component: EditInformationPage
    },
   
]

export const routeTo = ({ routeTo, history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeTo,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeTo,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}

export const routeToLogin = ({ history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeName.login,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeName.login,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}

export const routeToEquipPerformance = ({ history, search=null, data={}, replace=false }) => {
    if(replace) {
        return history.replace({
            pathname: routeName.equipPerformance,
            search: search ? `?${queryString.stringify(search)}` : null
        }, {
            ...data
        })
    }
    return history.push({
        pathname: routeName.equipPerformance,
        search: search ? `?${queryString.stringify(search)}` : null
    }, {
        ...data
    })
}
