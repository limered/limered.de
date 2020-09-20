<template>
    <div>
        {{game.title}}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import games from '../data/games';

function findGame({ shortTitle }) {
  return games.find((g) => g.shortTitle === shortTitle);
}

export default {
  name: 'GamePage',
  setup() {
    const route = useRoute();
    const game = findGame(route.params);

    return { game };
  },
};

</script>
