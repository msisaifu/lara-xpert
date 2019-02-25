const Home = () => import(/* webpackChunkName: "app/js/Home" */ './../components/Home.vue')
const About = () => import(/* webpackChunkName: "app/js/About" */ './../components/About.vue')

export const routes = [
	{
		path: '/',
        name: 'home',
        component: Home
	},
	{
		path: 'about',
        name: 'about',
        component: About
	}
]