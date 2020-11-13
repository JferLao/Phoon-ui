<template>
    <div class="changelog">
        <div class="heading>
            <ph-button type="primary">
                <a href="https://github.com/JferLao/Phoon-ui/releases" target="_blank">Github Releases</a>
            </ph-button>
            <%= 1 >
        </div>
        <ChangeLog></ChangeLog>
    </div>
</template>
<script>
    import ChangeLog from '../../../CHANGELOG.<%= 2 >.md';

    export default{
        components: {
            ChangeLog
        },
    }
</script>