<template>
    <div class="gameCard">
        <img class="imageLink" :src="imageLink" />
        <img class="gifLink" :src="gifLink" />
        <div class="info">
          <div class="title">{{title}}</div>
          <div class="subTitle">{{subTitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    imageLink: String,
    gifLink: String,
    title: String,
    subTitle: String,
  },
};
</script>

<style scoped>
.gameCard{
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
  transition: 200ms;

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
