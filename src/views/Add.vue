<template>
  <div class="Add">
    <h1 class="text-center">Add Article</h1>
    <form @submit.prevent="doAdd">
      <div class="form-group">
        <label for="titel">Titel :</label>
        <input type="email" class="form-control" id="titel" v-model="titel" />
      </div>
      <div class="form-group">
        <label for="description">Description :</label>
        <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <label for="content">Content :</label>
        <textarea class="form-control" id="content" rows="9" v-model="content"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Article</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data(){
    let art = localStorage.getItem('articles')
    art = JSON.parse(art);

    return {
      arts : art,  
      titel : "" ,
      description : "" ,
      content : "" ,
    }
  },
  mounted:{
      doAdd(){
          let article = {
            titel : this.titel,
            slug : this.titel.replaceAll(" " , "-").toLowerCase(),
            description : this.description,
            content : this.content,
          }
          this.arts.push(article)
          let bace = JSON.stringify(this.arts);
          localStorage.setItem("arts" , bace)
          this.$router.push("`/article/${zarticle}`")
      }
  }
}
</script>
<style scoped>
textarea {
  resize: none;
}
</style>