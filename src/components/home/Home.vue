<template>
    <div>
        <PageTitle icon="fa fa-home" main="Dashboard" sub="Cadastro de pacientes" />
        <div class="pacient">
            <Pacient title="Pacientes" :value="pacient[0].count" icon="fa fa-user" color="#3282cd" />
            <Pacient title="Medicos" :value="medico[0].count" icon="fa fa-user-md" color="#d54d50" />
        </div>
        <PacientbyId />
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Pacient from './Pacient'
import PacientbyId from './PacientbyId'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name:'Home',
    components: {PageTitle,Pacient,PacientbyId},
    data: function() {
        return {
            countMedico: 0,
            countPacient: 0,
            pacient: {},
            medico: {}
        }
    },
    methods: {
        getPacient() {
            axios.patch(`${baseApiUrl}/users`).then(res => {this.medico = res.data})
            axios.patch(`${baseApiUrl}/pacientes`).then(res => {this.pacient = res.data})
        }
    },
    mounted() {
        this.getPacient()
    }
}
</script>

<style>
    
</style>