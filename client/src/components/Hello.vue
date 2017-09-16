<template>
  <div>
    <img :src="imageUrl['.value']" />
    <br>
    <p v-if="started">Growing...</p>
    <p v-if="phaseVal >= 2">Mangga sudah Fully Grown!</p>
    <button type="button" name="start" @click="start">Start</button>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        started: false,
        done: false
      }
    },
    firebase() {
      return {
        url: {
          source: this.$db.ref('Mango/src'),
          asObject: true
        },
        phase: {
          source: this.$db.ref('Mango/phase'),
          asObject: true
        }
      }
    },
    computed: {
      imageUrl() {
        return this.url['.value'] !== null ? this.url : {
          '.value': 'https://i.ytimg.com/vi/Nto8O19D0kE/hqdefault.jpg'
        }
      },
      phaseVal() {
        return this.phase['.value']
      }
    },
    methods: {
      start() {
        this.$db.ref('Mango').set(null)
        this.$http.get('/mango')
          .then(({
            data
          }) => {
            this.started = true
          })
          .catch(err => console.log(err))
      }
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
