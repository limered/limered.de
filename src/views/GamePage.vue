<template>
    <div>
        {{game.title}}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import games from '../data/games';

export default {
  name: 'GamePage',
  setup() {
    const route = useRoute();
    const game = games
      .find((g) => g.shortTitle === route.params.shortTitle);

    return { game };
  },
};
</script>
