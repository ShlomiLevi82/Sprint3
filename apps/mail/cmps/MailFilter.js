export default {
  template: `
          <section class="mail-filter">
              <input 
                  v-model="filterBy.txt" 
                  @input="onSetFilterBy"
                  type="text" 
                  placeholder="Search in Mail">
          </section>
      `,
  data() {
    return {
      filterBy: {
        txt: '',
      },
    }
  },
  methods: {
    onSetFilterBy() {
      this.$emit('filter', this.filterBy)
      console.log('this.filterBy', this.filterBy)
    },
  },
}
