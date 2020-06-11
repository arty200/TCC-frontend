<template>
    <div class="medic-admin">
        <b-form>
            <input id="medico-id" type="hidden" v-model="medico.id"  />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="medico-name">
                        <b-form-input id="medico-name" type="text" v-model="medico.name" :readonly="mode === 'remove'" required placeholder="Informe o nome do Medico a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Email:" label-for="medico-email">
                        <b-form-input id="medico-email" type="text" v-model="medico.email" :readonly="mode === 'remove'" required placeholder="Informe o email do Medico a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="CPF:" label-for="medico-cpf">
                        <b-form-input id="medico-cpf" type="text" v-model="medico.cpf" :readonly="mode === 'remove'" required placeholder="Informe o CPF do Medico a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Especialidade:" label-for="medico-especiality">
                        <b-form-input id="medico-especiality" type="text" v-model="medico.especiality" :readonly="mode === 'remove'" required placeholder="Informe a especialidade do Medico a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="medico-password">
                        <b-form-input id="medico-password" type="password" v-model="medico.password" :readonly="mode === 'remove'" required placeholder="Informe a senha do Medico a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmação da senha:" label-for="medico-confirmPassword">
                        <b-form-input id="medico-confirmPassword" type="password" v-model="medico.confirmPassword" :readonly="mode === 'remove'" required placeholder="Informe a confirmação da senha do Medico a ser adicionado"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover stripped :items="medicos.data" :fields="fields" >
            <template slot="cell(actions)" slot-scope="data">
                <b-button variant="warning" @click="loadMedico(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadMedico(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name:'MedicAdmin',
    data: function() {
        return {
            mode:'save',
            medico: {},
            medicos: [],
            fields: [
                {key: 'id',label:'Código',sortable: true},
                {key:'name',label:'Nome',sortable: true},
                {key:'email',label:'Email',sortable:true},
                {key:'cpf',label:'CPF',sortable: true},
                {key:'especiality',label:'Especialidade',sortable: true},
                {key: 'actions',label:'Açoes'}
            ]
        }
    },
    methods: {
        loadMedicos(){
           const url = `${baseApiUrl}/users`
           axios.get(url).then(res=> {
               this.medicos = res
           })
        },
        reset() {
            this.mode = 'save'
            this.medico = {}
            this.loadMedicos()
        },
        save() {
            const method = this.medico.id ? 'put' : 'post'
            const id = this.medico.id ? `/${this.medico.id}` : ''
            axios[method](`${baseApiUrl}/users${id}`,this.medico)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        remove() {
            const id = this.medico.id
            axios.delete(`${baseApiUrl}/users/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                }).catch(showError)
        },
        loadMedico(medico, mode= 'save') {
            this.mode = mode
            this.medico = { ...medico}
        }
    },
    mounted() {
        this.loadMedicos()
    }
}

</script>

<style>

</style>