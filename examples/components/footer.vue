<template>
	<footer class="footer">
		<div class="container">
			<div class="footer-main">
				<h4>{{ langConfig.links }}</h4>
				<a href="https://github.com/JferLao/Phoon-ui" class="footer-main-link" target="_blank">{{ langConfig.repo }}</a>
				<a href="https://github.com/JferLao/Phoon-ui/releases" class="footer-main-link" target="_blank">{{
					langConfig.changelog
				}}</a>
				<a href="https://github.com/JferLao/Phoon-ui/blob/dev/FAQ.md" class="footer-main-link" target="_blank">{{
					langConfig.faq
				}}</a>
				<a :href="'/#/' + lang + '/component/custom-theme'" class="footer-main-link" target="_blank">{{
					langConfig.theme
				}}</a>
			</div>
			<div class="footer-main">
				<h4>{{ langConfig.community }}</h4>
				<a href="https://segmentfault.com" class="footer-main-link" target="_blank">SegmentFault</a>
			</div>
		</div>
	</footer>
</template>
<script>
import compoLang from "../i18n/component";
export default {
	computed: {
		lang() {
			return this.$route.path.split("/")[1] || "zh-CN";
		},
		langConfig() {
			return compoLang.filter((config) => config.lang === this.lang)[0]["footer"];
		},
	},
};
</script>
<style lang="scss">
.footer {
    background-color: #F7FBFD;
    width: 100%;
    padding: 40px 150px;
    // margin-top: -340px;
    box-sizing: border-box;
    height: 340px;

    .container {
      box-sizing: border-box;
      width: auto;
    }

    .footer-main {
      font-size: 0;
      display: inline-block;
      vertical-align: top;
      margin-right: 110px;

      h4 {
        font-size: 18px;
        color: #333;
        line-height: 1;
        margin: 0 0 15px 0;
      }

      .footer-main-link {
        display: block;
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #666;

        &:hover {
          color: #333;
        }
      }
    }
}
    @media (max-width: 1140px) {
    .footer {
      height: auto;
    }
  }

  @media (max-width: 1000px) {
    .footer-social {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .footer {
      .footer-main {
        margin-bottom: 30px;
      }
    }
  }
</style>
