const user = {
    name: "Larry Hollywood",
    cities: ['Philadelphia', 'New York', 'Dublin'], 
    printPlacesLived() {
        return this.cities.map((city) => {
            return this.name + ' has live in ' + city; 
        }); 
       
    }
}

console.log(user.printPlacesLived()); 
