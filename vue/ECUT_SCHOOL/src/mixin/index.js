export default {
    data() {
        return {
            duration: 0
        }
    },
    methods: {
        loading() {
            this.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                duration: this.duration
            });
        }
    },
}