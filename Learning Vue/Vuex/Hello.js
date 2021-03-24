export const Hello = {
  template:`
    <p>
      State counter pada Hello : 
      {{ counter }}
    </p>
  `,
  computed : {
    counter(){
      return this.$store.getters.counter
    }
  }
}