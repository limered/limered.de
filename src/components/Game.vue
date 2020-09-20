<template>
    <router-link :to="link">
      <div class="gameCard">
        <img class="imageLink" :src="game.imageLink" />
        <img class="gifLink" :src="game.gifLink" />
        <div class="info">
          <div class="title">{{game.title}}</div>
          <div class="subTitle">{{game.subtitle}}</div>
        </div>
      </div>
    </router-link>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    game: {
      image: String,
      gif: String,
      title: String,
      subtitle: String,
      shortTitle: String,
    },
  },
  setup(props) {
    const link = computed(() => `/game/${props.game.shortTitle}`);

    return {
      link,
    };
  },
};
</script>

<style scoped>
.gameCard{
  display: block;
  position: relative;
  width: 300px;
  height: 300px;

}
img.imageLink{
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: aqua;
}
img.gifLink{
  position: absolute;
  width: 100%;
  height: 100%;

  opacity: 0;

  background-color: red;
}

.info{
  position: absolute;
  bottom: 0;
  width: 100%;

  opacity: 0;
  transition: 500ms;

  background-image: linear-gradient(to bottom, rgba(1,1,1,0) 0%, rgba(0,0,0,0.5) 100%);
  color:white;
}
.info .title{
  font-size: 22px;
  margin: 5px 10px 5px 10px;
}
.info .subTitle{
  font-size: 12px;
  margin: 0 10px 5px 10px;
}

.gameCard:hover .info{
  opacity: 1;
}

.gameCard:hover .gifLink{
  opacity: 1;
}
</style>
