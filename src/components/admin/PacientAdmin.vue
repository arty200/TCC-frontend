<template>
    <div class="pacient-admin">
        <b-form>
            <input id="paciente-id" type="hidden" v-model="paciente.id"  />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="paciente-name">
                        <b-form-input id="paciente-name" type="text" v-model="paciente.name" :readonly="mode === 'remove'" required placeholder="Informe o nome do paciente a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Idade:" label-for="paciente-age">
                        <b-form-input id="paciente-age" type="text" v-model="paciente.age" :readonly="mode === 'remove'" required placeholder="Informe a idade do paciente a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="CPF:" label-for="paciente-cpf">
                        <b-form-input id="paciente-cpf" type="text" v-model="paciente.cpf" :readonly="mode === 'remove'" required placeholder="Informe o CPF do paciente a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Peso:" label-for="paciente-weight">
                        <b-form-input id="paciente-weight" type="text" v-model="paciente.weight" :readonly="mode === 'remove'" required placeholder="Informe o peso inicial do paciente"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Sexo:" label-for="paciente-sex">
                        <b-form-input id="paciente-sex" type="text" v-model="paciente.sex" :readonly="mode === 'remove'" required placeholder="Informe o sexo do paciente a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Url da imagem do paciente(opcional):" label-for="paciente-imageUrl">
                        <b-form-input id="paciente-imageUrl" type="password" v-model="paciente.imageUrl" :readonly="mode === 'remove'" required placeholder="Informe a imagem do paciente a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-form-group label="Informações" label-for="paciente-info">
                    <VueEditor v-model="paciente.info" placeholder="Informações sobre o paciente"/>
                </b-form-group>
            </b-row>
            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover stripped :items="pacientes.data" :fields="fields" >
            <template slot="cell(actions)" slot-scope="data">
                <b-button variant="warning" @click="loadPaciente(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadPaciente(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit"></b-pagination>
    </div>
</template>


<script>
import { VueEditor } from "vue2-editor"
import { baseApiUrl,showError } from '@/global'
import axios from 'axios'

export default {
    name:'PacienteAdmin',
    components: { VueEditor },
    data: function() {
        return {
            mode:'save',
            paciente: {},
            pacientes: [],
            page: 1,
            limit: 0,
            count: 0,
            fields: [
                {key: 'id',label:'Código',sortable: true},
                {key:'name',label:'Nome',sortable: true},
                {key:'cpf',label:'CPF',sortable: true },
                {key:'age',label:'Idade',sortable: true},
                {key:'weight',label:'Peso',sortable:true},
                {key:'sex',label:'Sexo',sortable: true},
                {key: 'actions',label:'Açoes'}
            ]
        }
    },
    methods: {
        loadPacientes(){
           const url = `${baseApiUrl}/pacientes?page=${this.page}`
           axios.get(url).then(res=> {
               this.pacientes = res.data
               this.limit = res.limit
               this.count = res.count
           })
        },
         reset() {
            this.mode = 'save'
            this.paciente = {}
            this.loadPacientes()
        },
        save() {
            const method = this.paciente.id ? 'put' : 'post'
            const id = this.paciente.id ? `/${this.paciente.id}` : ''
            axios[method](`${baseApiUrl}/pacientes${id}`,this.paciente)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        remove() {
            const id = this.paciente.id
            axios.delete(`${baseApiUrl}/pacientes/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        loadPaciente(paciente, mode= 'save') {
            this.mode = mode
            this.paciente = { ...paciente}
        }
    },
    watch: {
        page(){
            this.loadPacientes()
        }
    },
    mounted() {
        this.loadPacientes()
    }
}
</script>

<style>

</style>