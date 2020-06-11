<template>
    <div class="pesagem-by-id">
        <PageTitle icon="fa fa-user" :main="pesagem.name" :sub="pesagem.date"> </PageTitle>
        <div class="pesagem-content" v-html="'Peso:  ' + pesagem.weight + 'Kg'"></div>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name:'PesagembyId',
    components: {PageTitle},
    data: function() {
        return {
            pesagem: {},
        }
    },
    mounted() {
        const url = `${baseApiUrl}/pesagem/${this.$route.params.id}`
        axios.get(url).then(res => this.pesagem = res.data)
    }
}
</script>

<style>
    .pesagem-content {
        background-color: white;
        border-radius: 8px;
        padding: 25px;
    }

    .pesagem-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
    }

    .pesagem-content img {
        max-width: 100%;
    }

    .pesagem-content :last-child {
        margin-bottom: 0px;
    }


</style>