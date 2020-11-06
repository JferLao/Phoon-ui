<template>
    <button
        class="ph-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :type="nativeType"
        :class="[
            type ? 'ph-button--' + type : '',
            buttonSize ? 'ph-button--' + buttonSize : '',
            {
                'is-disabled':buttonDisabled,
                'is-loading':loading,
                'is-plain':plain,
                'is-round':round,
                'is-circle':circle,
                'is-ghost':ghost
            }
        ]"
    >
        <i class="ph-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
        <!-- 可以通过$slots.default获取到通过<slot></slot>接收到的所有对象 -->
    </button>
</template>

<script>
export default {
    name:'PhButton',

    props:{
        type:{
            type:String,
            default:'default'
        },
        size:String,
        loading:Boolean,
        disabled:Boolean,
        plain:Boolean,
        round:Boolean,
        circle:Boolean,
        ghost:Boolean,
        icon:{
            type:String,
            default:''
        },
        nativeType:{
            type:String,
            default:''
        }
    },

    computed: {
        buttonSize(){
            return this.size
        },
        buttonDisabled(){
            return this.disabled
        }
    },

    methods: {
        handleClick(event){
            this.$emit('click',event)
        }
    },
}
</script>