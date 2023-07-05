export default {
    emits: ["filter"],
    template: `
        <input 
          v-model="filterBy.txt" 
          type="text" 
          placeholder="Search"
        />
      `,
    data() {
      return {
        filterBy: {
          txt: "",
        },
      };
    },
    watch: {
      filterBy: {
        handler() {
          this.$emit("filter", this.filterBy);
        },
        deep: true,
      },
    },
  };
  