<template>
  <div class="base-input">
    <input
        :class="{'error': hasError}"
        :type="type"
        :value="modelValue"
        :placeholder="label"
        :maxlength="maxLength"
        :error="error"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="hasError= error = false;"
        @focusout="ifEmpty"
    />
    <label>{{label}}</label>
    <a v-if="hasError || error" class="error-message" >{{label}} is required.</a>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: "Input"
      },
      type: {
        type: String,
        default: ""
      },
      maxLength: {
        type: Number,
        default: 50
      },
      error: {
        type: Boolean,
        default: false
      },
      modelValue: {
        default: '',
        required: true
      }
    },
    data() {
      return {
        hasError: false
      }
    },
    methods: {
      ifEmpty() {
        this.hasError = this.modelValue === '';
      },
    },
    computed: {
      ifErrorStrongColor() {
        return this.hasError || this.error ?  '#ff3737' : '#202020'
      },
      ifErrorLightColor() {
        return this.hasError || this.error ? 'rgb(255, 175, 175)' : '#ffffff'
      },
      ifErrorShow() {
        return this.hasError ? 'none' : ''
      }
    }
  }
</script>

<style lang="scss" scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active{
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  &:not(:placeholder-shown) + label {
    font-size: 14px;
    transform: translate(-2px, -22px);
  }
}

.base-input {
  position: relative;
  display: block;
  margin: 12px 0 24px 0;
  > input {
    border: 1px solid v-bind(ifErrorStrongColor);
    border-radius: 7px;
    background-color: v-bind(ifErrorLightColor);
    outline: none;
    padding: 12px 16px;
    color: v-bind(ifErrorStrongColor);
    font-size: 16px;
    z-index: 1;
    transition: 0.25s;
    &:focus {
      border-color: $accent-color;
      box-shadow: 0 0 0 0 rgb(0 0 0 / 15%);
      + label {
        transform: translate(-2px, -22px);
        color: $accent-color;
        font-size: 14px;
        font-weight: bold;
      }
    }
    &::placeholder {
      opacity: 0;
      transition: inherit;
    }
    &:not(:placeholder-shown) + label {
      font-size: 14px;
      transform: translate(-2px, -22px);
    }
  }
  >label {
    color: v-bind(ifErrorStrongColor);
    //display: v-bind(ifErrorShow);
    position: absolute;
    left: 10px;
    top: 12px;
    transition: 0.25s;
    background: linear-gradient(0deg, v-bind(ifErrorLightColor) 40%, transparent 0%);
    background-size:  100px;
    font-size: 16px;
    font-weight: bold;
    padding: 0 3px;
    z-index: 0;
    pointer-events: none;
    cursor: pointer;
  }
}
.error {
  animation: shake 0.2s ease-in-out 0s 2;
  box-shadow: 0 0 3px 1px $light-error-color;
}

.error-message {
  position: absolute;
  display: block;
  margin: 3px 0 0 12px;
  font-size: 12px;
  color: $strong-error-color;
}

@keyframes shake {
  0% { margin-left: 0rem; }
  25% { margin-left: 0.3rem; }
  75% { margin-left: -0.3rem; }
  100% { margin-left: 0rem; }
}
</style>
