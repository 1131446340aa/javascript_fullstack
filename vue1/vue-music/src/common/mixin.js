import { mapActions ,mapGetters} from 'vuex'
export const searchMixin = {
    data() {
        return {
            query: ""
        }
    },
    methods: {
        ...mapActions(['addPlayList','saveSearchHistory', 'deleteSearchHistory', 'Alldelete', 'selectPlaySong']),
        onQueryChange(query) {
            console.log(query);
            
            this.query = query.trim()
        },
        saveSearch(song) {
            // this.$refs.searchBox.setQuery(song)
            this.saveSearchHistory(this.query)
            this.selectPlaySong(song)
            this.addPlayList(song)
        },
        blurInput() {
            this.$refs.searchBox.blur()
        }
    }
}
export const playerMixin = {
    computed: {
      ...mapGetters([
        'currentSong',
        'playList'
      ])
    },
    methods: {
  
    }
  }