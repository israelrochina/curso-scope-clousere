function createPetList() {
    // Tu código aquí 👈
    let petList = [];
    return function (newPet) {
      if (newPet) {
        petList.push(newPet);
        return petList;
      
      }
      return petList;
      
    }
  }
const myPetList=createPetList()("Cat");
console.log(myPetList);