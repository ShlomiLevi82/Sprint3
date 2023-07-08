
export default {
  props: ["info", "isEditNote"],
  template: `
    <div>      
      <h2 v-if="!isEditNote" class="todo-header">{{info.txt}}</h2>
      <textarea class="line-break-textarea" v-if="isEditNote" v-model="info.txt"></textarea>
    </div>
  `,
  
};
