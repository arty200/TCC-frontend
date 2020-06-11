<template>
    <div class="pesagem-item">
        <router-link :to="{name: 'pesagembyId', params: { id: pesagem.id}}">
            <div class="pesagem-item-image d-none d-sm-block">
                <img src="@/assets/article.png" height="150" width="150" alt="Pesagem">
            </div>
            <div class="pesagem-item-info">
                <h2> <strong>ID da pesagem</strong> {{pesagem.id}}</h2>
                <p> <strong>Data da pesagem </strong> {{pesagem.date}}</p>
                <p> <strong>Peso medido </strong> {{pesagem.weight}}</p>
                <span class="pesagem-item-name">
                    <strong>Nome: </strong> {{pesagem.name}}
                </span>
            </div>
        </router-link>   
    </div>
</template>

<script>

export default {
    name:'PesagemItem',
    props: ['pesagem']
  
}
</script>

<style>

.pesagem-item {
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: white;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.pesagem-item a {
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    color: black;
}

.pesagem-item-info h2 {
    font-size: 1.7 rem;
}

.pesagem-item-image {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #AAAAAA;
}

.pesagem-item-image img {
    border-radius: 5px;
}

.pesagem-item-info {
    display: flex;
    align-self: stretch;
    flex-direction: column;
}

.pesagem-item-info p {
    flex: 1;
    color: #555555;
}

</style>