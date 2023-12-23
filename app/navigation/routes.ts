import Home from "../components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Formula from "../components/screens/formula/Formula";


export const routes: IRoute[] = [
    {
        name: 'Home',
        component: Home
    },

    {
        name: 'Formula',
        component: Formula
    }
]
