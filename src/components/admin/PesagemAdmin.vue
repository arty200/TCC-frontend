<template>
    <div class="pesagem-admin">
        <b-form>
            <input id="pesagem-id" type="hidden" v-model="pesagem.id"  />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="pesagem-name">
                        <b-form-input id="pesagem-name" type="text" v-model="pesagem.name" :readonly="mode === 'remove'" required placeholder="Informe o nome do Paciente pesado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Peso:" label-for="pesagem-weight">
                        <b-form-input id="pesagem-weight" type="text" v-model="pesagem.weight" :readonly="mode === 'remove'" required placeholder="Informe o peso do paciente"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Data:" label-for="pesagem-date">
                        <b-form-input id="pesagem-date" type="text" v-model="pesagem.date" :readonly="mode === 'remove'" required placeholder="Informe a data em que foi realizada a pesagem"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="ID:" label-for="pesagem-pacientesId">
                        <b-form-input id="pesagem-pacientesId" type="text" v-model="pesagem.pacientesId" :readonly="mode === 'remove'" required placeholder="Informe o ID do paciente pesado"></b-form-input>
                    </b-form-group>
                </b-col>
               
            </b-row>
            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover stripped :items="pesagens.data" :fields="fields" >
            <template slot="cell(actions)" slot-scope="data">
                <b-button variant="warning" @click="loadPesagem(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadPesagem(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl,showError } from '@/global'
import axios from 'axios'

export default {
    name:'PesagemAdmin',
    data: function() {
        return {
            mode:'save',
            pesagem: {},
            pesagens: [],
            fields: [
                {key: 'id',label:'Código',sortable: true},
                {key:'name',label:'Nome',sortable: true},
                {key:'weight',label:'Peso',sortable:true},
                {key:'date',label:'Data',sortable: true},
                {key: 'actions',label:'Açoes'}
            ]
        }
    },
    methods: {
        loadPesagens(){
           const url = `${baseApiUrl}/pesagem`
           axios.get(url).then(res=> {
               this.pesagens = res.data
           })
        },
        reset() {
            this.mode = 'save'
            this.pesagem = {}
            this.loadPesagens()
        },
        save() {
            const method = this.pesagem.id ? 'put' : 'post'
            const id = this.pesagem.id ? `/${this.pesagem.id}` : ''
            axios[method](`${baseApiUrl}/pesagem${id}`,this.pesagem)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        remove() {
            const id = this.pesagem.id
            axios.delete(`${baseApiUrl}/pesagem/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        loadPesagem(pesagem, mode= 'save') {
            this.mode = mode
            this.pesagem = { ...pesagem}
        }
    },
    mounted() {
        this.loadPesagens()
    }
}
</script>

<style>

</style>