<script>
export default {
  data() {
    return {
      textValue: '',
      isEdit: true
    }
  },
  methods: {
    handleClick() {
      this.isEdit = !this.isEdit
      this.$nextTick(() => {
        this.$refs.inp.focus()
      })
    },
    handleEnter(e) {
      this.$emit('input', e.target.value)
    }
  },
  watch: {
    value() {
      this.isEdit = false
    }
  }
}
</script>

<template>
  <div class="my-tag">
    <input ref="inp" @keyup.enter="handleEnter" v-model="textValue" v-fouc @blur="isEdit = false" v-if="isEdit" class="input"
           type="text"
           placeholder="输入标签"/>
    <div class="text" v-else @dblclick="handleClick"> {{ textValue }}</div>
  </div>
</template>

<style scoped>
.my-tag {
  cursor: pointer;

  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;

    &::placeholder {
      color: #666;
    }
  }
}
</style>