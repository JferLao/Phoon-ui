<template>
    <div class="page-changelog">
        <div class="heading">
            <ph-button class="fr">
                <a href="https://github.com/JferLao/Phoon-ui/releases" target="_blank">GitHub Releases</a>
            </ph-button>
            更新日志
        </div>
        <ul class="timeline" ref="timeline"></ul>
        <change-log ref="changeLog"></change-log>
    </div>
</template>
<script>
    import ChangeLog from '../../../CHANGELOG.zh-CN.md';

    export default{
        components: {
            ChangeLog
        },
    }
</script>