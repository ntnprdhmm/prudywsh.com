<template>
  <Shell :title='title' :items='items' />
</template>

<script>
import Shell from '../shell/Shell.vue';

export default {
  name: 'ShellAbout',
  components: {
    Shell,
  },
  data: () => ({
    title: 'About me',
    items: {
      location: { type: 'string', data: 'Paris, France' },
      work_at: { type: 'string', data: 'Spendesk' },
      interests: {
        type: 'array',
        data: ['web', 'fullstack', 'competitive programming', 'road cycling', 'beer'],
      },
      favorite_languages: {
        type: 'array',
        data: ['Javascript', 'Python'],
      },
    },
  }),
};
</script>
