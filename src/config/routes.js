
//Comoponentes
import Layout from '../components/Layout_Home/Layout' 

//Paginas
import Home from '../pages/Home/Home';


const routes = [
    {
		path: '/',
		component: Layout,
		exact: false,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true
            }
        ]
    }
];

export default routes;