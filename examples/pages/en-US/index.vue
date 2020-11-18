<style  scoped>
    .index-main{
        width:100%;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color:#FFF;
        background-image:url("examples/assets/images/background.png");
        background-position: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        .index-container{
            width:50%;
            height:100%;
            padding-left: 20%;
            padding-top:15%;
            .index-content{
                display:flex;
                justify-content:center;
                flex-direction:column;
                .index-title{
                    position:relative;
                    display:inline-block;
                    img{
                        border-style:none
                    }
                    .index-image{
                        height:100px;
                    }
                }
                .index-content{
                    font-size: 24px;
                    margin-top: 10px;
                    padding-left: 16px;
                }
                .index-actions{
                    margin:80px 0 150px 16px;
                }
            }
        }

    }
</style>

<template>
    <div>
        <div class="index-main">
            <div class="index-container">
                <div class="index-content">
                    <span class="index-title">
                        <img src="examples/assets/images/logo.png" alt="" class="index-image">
                    </span>
                    <div class="index-content">A set of application level based on Vue.js</div>
                    <div class="index-content">UI component library</div>
                    <div class="index-actions">
                        
                        <ph-button type="primary" round @click="to('home')">Getting Started</ph-button>
                        <ph-button type="default" round @click="to('github')">Github </ph-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        to(path){
           path==='home'? this.$router.push({path:`${this.lang}/component/installation`}) : window.open('https://github.com/JferLao/Phoon-ui','_blank')
        }
    },
    computed: {
		lang() {
			return this.$route.path.split("/")[1] || "zh-CN";
		},
	},
}
</script>