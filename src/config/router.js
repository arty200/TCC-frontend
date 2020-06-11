import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import PacientWithPesagem from '@/components/pacient/PacientWithPesagem'
import PesagembyId from '@/components/pacient/PesagembyId'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},{
    name:'adminPages',
    path:'/admin',
    component: AdminPages
},{
    name:'pacientWithPesagem',
    path:'/pacientes/:id/pesagens',
    component: PacientWithPesagem
},{
    name:'pesagembyId',
    path:'/pesagens/:id',
    component:PesagembyId

},{
    name:'auth',
    path:'/auth',
    component: Auth 
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router