<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-ambulance" main="Cadastro de pacientes" sub="Cadastros e CIA" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                <b-tab title="Pacientes" active>
                    <PacientAdmin/>
                </b-tab>
                <b-tab title="Pesagens">
                    <PesagemAdmin/>
                </b-tab>
                <b-tab title="Medicos">
                    <MedicAdmin/>
                </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import PacientAdmin from './PacientAdmin'
import PesagemAdmin from './PesagemAdmin'
import MedicAdmin from './MedicAdmin'

export default {
    name:'AdminPages',
    components:{PageTitle,PacientAdmin,PesagemAdmin,MedicAdmin}
}
</script>

<style>
    
</style>