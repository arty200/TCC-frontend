<template>
    <div class="paciente-with-pesagem">
        <PageTitle icon="fa fa-user" :main="paciente.name" sub="Paciente"/>
        <ul>
            <li v-for="pesagem in pesagens" :key="pesagem.id">
                <PesagemItem :pesagem="pesagem" />
            </li>
            <div class="load-more">
                <button v-if="loadMore" class="btn btn-lg btn-outline-primary" @click="getPesagens">Carregar mais pesagens</button>
            </div>
        </ul>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'
import PesagemItem from '../pacient/PesagemItem'

export default {
    name:'PacientWithPesagem',
    components: {PageTitle,PesagemItem},
    data: function() {
        return {
            paciente: {},
            pesagens: [],
            page:1,
            loadMore: true
        }
    },
    methods: {
        getPaciente() {
            const url = `${baseApiUrl}/pacientes/${this.paciente.id}`
            axios(url).then(res => this.paciente = res.data)
        },
        getPesagens(){
            const url = `${baseApiUrl}/pacientes/${this.paciente.id}/pesagem?page=${this.page}`
            axios(url).then(res => {
                this.pesagens = this.pesagens.concat(res.data)
                this.page++
                if(res.data[0].id == this.pesagens[0].id) this.loadMore = false

                if(res.data[0].id === undefined) this.loadMore = false
            })
        }
    },
    mounted() {
        this.paciente.id = this.$route.params.id
        this.getPaciente()
        this.getPesagens()
    }
}
</script>

<style>
    .paciente-with-pesagem ul {
        list-style-type: none;
        padding: 0px;
    }

    .paciente-with-pesagem .load-more{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;

    }
</style>