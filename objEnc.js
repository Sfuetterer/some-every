function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
  [favoriteNumber]: 'That is my favorite!'
}

var instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }
  const d = createAnimal("dog", "bark", "Woooof!")

  function createAnimal(species, verb, sound) {
     return {species, 
      [verb]() {
          return sound;
      }
    }
  }