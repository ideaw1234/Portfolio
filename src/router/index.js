import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
import AboutMe from '../views/AboutMe'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component:HomePage
        },
        {
            path:'/about',
            component:AboutMe
        }
    ]
})
export default router