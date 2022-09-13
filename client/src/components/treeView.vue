<template>
    <v-list dense>
      <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
          sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
        >

            <v-list-item-icon>
              <v-icon v-text="child.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="child.title"></v-list-item-title>


        </v-list-item>
      </v-list-group>
    </v-list>
</template>

<script>
    import store from "../store/store";

    export default {
        data() {
            return {
                adminMenu: false,
              items: [
                {
                  action: 'mdi-ticket',
                  items: [{ title: 'List Item' }],
                  title: 'Attractions',
                },
                {
                  action: 'mdi-silverware-fork-knife',
                  active: true,
                  items: [
                    { title: 'Breakfast & brunch', icon: 'mdi-nut' },
                    { title: 'New American', icon: 'mdi-nut' },
                    { title: 'Sushi', icon: 'mdi-nut'},
                  ],
                  title: 'Dining',
                },
                {
                  action: 'mdi-school',
                  items: [{ title: 'List Item' }],
                  title: 'Education',
                },
                {
                  action: 'mdi-run',
                  items: [{ title: 'List Item' }],
                  title: 'Family',
                },
                {
                  action: 'mdi-bottle-tonic-plus',
                  items: [{ title: 'List Item' }],
                  title: 'Health',
                },
                {
                  action: 'mdi-content-cut',
                  items: [{ title: 'List Item' }],
                  title: 'Office',
                },
                {
                  action: 'mdi-tag',
                  items: [{ title: 'List Item' }],
                  title: 'Promotions',
                },
              ],
        }},

        mounted() {
            if (store.getters.profesja === 'Admin'){
                this.adminMenu = true
            }
        }
    }
</script>

<style scoped>

</style>
