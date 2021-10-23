<template>
  <div class="Page">
    <h1 class="text-center">Article page</h1>
    <articles>
      <h3>{{ article.titel }}</h3>
      <div>{{article.content}}</div>
    </articles>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data(){
    let art = localStorage.getItem('articles')
    art = JSON.parse(art);
    let article = art.find(
        article => article.slug == this.$route.params.slug
    )
    return {
      arts : art, 
      article : article
    }
  }
}
</script>
