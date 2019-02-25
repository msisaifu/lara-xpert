const Home = () => import(/* webpackChunkName: "dashboard/js/Home" */ './../components/Home.vue')
const About = () => import(/* webpackChunkName: "dashboard/js/About" */ './../components/About.vue')
const Welcome = () => import(/* webpackChunkName: "dashboard/js/Welcome" */ './../components/Welcome.vue')

export const routes = [
	{
		path: '/lv-admin',
		component: Welcome,
		children: [
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
	}
]