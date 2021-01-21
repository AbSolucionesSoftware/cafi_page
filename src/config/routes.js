
//Comoponentes
import Layout from '../components/Layout_Home/Layout' 

//Paginas
import Home from '../pages/Home/home';
import Galeria from '../pages/Galeria/galeria'


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
			},
			{
				path: '/galeria',
				component: Galeria,
				exact: true
            }
        ]
    }
];

export default routes;