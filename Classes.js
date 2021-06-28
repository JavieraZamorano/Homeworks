class House {
    walls = 'brick'
    windows = 'glass'
    floor = 'notPissedOn'
    constructor(numberOfBedrooms, address, hasGarden) {
        this.numberOfBedrooms = numberOfBedrooms;
        this.address = address;
        this.hasGarden = hasGarden;
    }

    ringDoorbell() {
        alert('RING RING');
    };

    get numberOfBedrooms() {
        return this._numberOfBedrooms
    };

    set numberOfBedrooms(newNumberOfBedrooms) {
        this._numberOfBedrooms = newNumberOfBedrooms*2;
    }

    showAddress() {
        alert(this.address)
    }
};


const myFavHouse = new House(6,"Hampstead", true);

//myFavHouse.ringDoorbell();

myFavHouse.numberOfBedrooms = 5

//alert(myFavHouse.walls);

//myFavHouse.showAddress();
//INHERITANCE
class Castle extends House {
    towers = 'tall';
    door = 'portculis';
    hasMoat = true;

    constructor(numberOfBedrooms, address, hasGarden,dungeonSmell, tapestryColour, hasBlazingFireplace) {
        super(numberOfBedrooms, address, hasGarden);
        this.dungeonSmell = dungeonSmell;
        this.tapestryColour = tapestryColour;
        this.hasBlazingFireplace = hasBlazingFireplace;
    };

    ringDoorbell() {
        super.ringDoorbell();
        alert('BING BANG BONG');
    };
};

const castleScare = new Castle(10, 'Germany', true, 'musty', 'Royal Blue', true);
//alert (castleScare.dungeonSmell + castleScare.tapestryColour);

//castleScare.ringDoorbell();


//HW
function Clock({ template }) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();