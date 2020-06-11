<template>
    <div class="pacient">
        <div class="pacient-filter">
            <strong> Digite o Id do paciente :</strong>
            <input type="text" v-model="id" placeholder="Digite o id aqui..." class="input-text">
            <div class="search-button">
                 <b-button variant="primary"  @click="getLink()"> Pesquisar </b-button>
            </div>
            <div class="error-message" v-if=!exists >
                <strong> NENHUM USUÁRIO COM O ID INFORMADO FOI ENCONTRADO !!! </strong>
            </div>
        </div>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

//<router-link to="/">Pesquisar</router-link>
export default {
    name:'PacientbyId',
    data: function() {
        return {
            id: '',
            pacientes: [],
            exists: true,
            page: 1
        }
    },

    methods: {
        loadPacientes(){
           const url = `${baseApiUrl}/pacientes?page=${this.page}`
           axios.get(url).then(res=> {
               this.pacientes = res.data
           })
        },
        getLink(){
            for(let i=0 ; i< this.pacientes.count;i++){
                if(this.pacientes.data[i].id == this.id){
                    const url = `/pacientes/${this.id}/pesagens`
                    this.$router.push(url)
                    this.exists = true
                    return null
                }
            }
            this.exists = false
        }
    },
    mounted() {
        this.loadPacientes()
    }
}
</script>

<style>
   .pacient{
       flex: 1;
       display: flex;
       border-radius: 8px;
       margin-right: 20px;
       margin-bottom: 20px;
       background: white;
       padding: 20px;
       border: 1px solid rgba(0,0,0,0.2);
       box-shadow: 1px 1px 5px rgba(0,0,0,0.15);;
   }

    .error-message{
        margin-left: 400px;
        margin-top: 10px;
        color: red;
        font-size: 2rem;
    }

    .search-button {

        margin-top: 5px;
        margin-left: 250px;
    }

    .input-text {
        margin-left: 50px;
    }
</style>