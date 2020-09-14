<template>
  <div class="home">
    <h1>Games</h1>
    <div class="gameContainer">
      <div v-for="game in state.games" v-bind:key="game.title">
        <l-d-game
          :title="game.title"
          :subTitle="game.subtitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import LDGame from '../components/LDGame.vue';
import games from '../data/games';

export default {
  name: 'Home',
  components: {
    LDGame,
  },
  setup() {
    const state = reactive({
      games,
    });

    return {
      state,
    };
  },
};
</script>

<style scoped>
.gameContainer{
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.gameContainer > div{
  margin: 10px;
}
</style>
