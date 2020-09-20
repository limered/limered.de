<template>
  <div class="home">
    <h1>Games</h1>
    <div class="gameContainer">
      <div v-for="game in state.games" v-bind:key="game.link">
        <Game :game="game" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import Game from '../components/Game.vue';
import games from '../data/games';

export default {
  name: 'Home',
  components: {
    Game,
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
