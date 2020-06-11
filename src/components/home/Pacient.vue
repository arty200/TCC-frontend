<template>
    <div class="pacient">
        <div class="pacient-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="pacient-info">
            <span class="pacient-title">{{title}}</span>
            <span class="pacient-value">{{value}}</span>
        </div>
    </div>
</template>

<script>

export default {
    name:'Pacient',
    props:['title','value','icon','color'],
    computed: {
        style() {
            return "color: " + (this.color || "#000")
        }
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

   .pacient-icon {
       display: flex;
       align-items: center;
   }

   .pacient-icon i {
       font-size: 10rem;
   }

   .pacient-info {
       flex: 1;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
   }

  .pacient-title {
      font-size: 1.2rem;
  }

  .pacient-value {
      font-size: 3rem;
  }

</style>