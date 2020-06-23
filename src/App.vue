<template>
	<div id="app">
		<Header title="Cadastro de pesagens em leito" :hideToggle="!user" :hideUserDropdown="!user"/>
		<Loading v-if="validatingToken"/>
		<Content />
		<Footer />
	</div>
</template>

<script>
import axios from "axios"
import {baseApiUrl,userKey} from "@/global" 
import Header from "./components/template/Header"
import Register from "./components/template/Register"
import Content from "./components/template/Content"
import Footer from "./components/template/Footer"
import Loading from "./components/template/Loading"
import { mapState } from 'vuex'

export default {
	name: "App",
	components: { Header, Register,Content,Footer,Loading},
	computed: mapState(['user']),
	data: function() {
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			console.log(json)
			if(!json){
				console.log('NAO PODE CAIR AQUI' + json)
				const userData = JSON.parse(json)
				this.$store.commit('setUser',null)
			}else {
				userData = false
			}
			if(!userData) {
				this.validatingToken = false
				this.$router.push({name: 'auth'})
				return 
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`,userData)

			if(res.data) {
				this.$store.commit('setUser',userData)
			} else {
				localStorage.removeItem(userKey)
				this.$router.push({name:'auth'})
			}
			this.validatingToken = false
		}
	},
	created(){
		this.validateToken()
	}
}
</script>

<style>

	* {
		font-family: "Lato",sans-serif;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 1fr;
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}
</style>