<template>
    <div class="home">
        <img class="monitor" :src="videoSrc">
        <div class="ctl-panel">
            <div class="row">
                <div class="cell"></div>
                <img class="cell ctl-btn" src="../assets/up.svg" @touchstart.prevent="move('forward')"
                     @touchend="stop">
                <div class="cell"></div>
            </div>
            <div class="row">
                <img class="cell ctl-btn" src="../assets/left.svg" @touchstart.prevent="move('left')"
                     @touchend="stop">
                <img class="cell logo" src="../assets/logo.svg">
                <img class="cell ctl-btn" src="../assets/right.svg" @touchstart.prevent="move('right')"
                     @touchend="stop">
            </div>
            <div class="row">
                <div class="cell"></div>
                <img class="cell ctl-btn" src="../assets/down.svg" @touchstart.prevent="move('back')" @touchend="stop">
                <div class="cell"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                videoSrc: '/api/video/mpeg'
            }
        },
        methods: {
            move(direct) {
                let url = `/api/move/${direct}`
                this.$axios.post(url, null).then(resp => {
                    console.log(`move:${direct}`)
                }).catch(err => {
                    console.log(err)
                })
            },
            stop() {
                let url = `/api/move/stop`
                this.$axios.post(url, null).then(resp => {
                    console.log(`stop`)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="less">
    .home {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 16px;
        display: flex;
        flex-direction: column;

        .monitor {
            width: 100%;
            flex: 1;
            background-color: #42b983;
        }

        .ctl-panel {
            display: flex;
            flex-direction: column;

            .row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .cell {
                    flex: 1;
                    width: 100px;
                    border: none;

                    &.ctl-btn {
                        &:active {
                            background-color: #cccccc;
                        }
                    }
                }
            }
        }
    }
</style>
