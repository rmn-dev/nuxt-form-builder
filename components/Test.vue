<template>
  <div class="w-full">
    <form v-if="form">
      <input type="text" v-model="form.value.title" />
      <input type="text" v-model="form.value.email" />

      <button @click="form.validateModel()" type="button">validate</button>

      <div>
        <pre>{{ form.errors }}</pre>
      </div>
      <div>
        <pre>{{ form.value }}</pre>
      </div>
      <div>
        <pre>{{ form.isValid }}</pre>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { Post } from '~/models/post';
import { Form } from '~/lib/form';

@Component({
  name: 'nfb-test',
})
export default class Test extends Vue {
  private errors: any;

  form: Form<Post> | null = null;

  mounted() {
    this.createPost();
  }

  async createPost() {
    const post = new Post();
    post.title = 'Hello';
    post.email = 'asdasd.pl';
    this.form = new Form(post);
  }

  //TODO debounce
  @Watch('form.value', { deep: true })
  async onFormChange(value: any) {
    console.log(value);
    await this.form?.validateModel();
  }
}
</script>
