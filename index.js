let parkedCars = []

function Car(licensePlate, owner) {
    this.licensePlate = licensePlate
    this.owner = owner
}

function createPark(size) {
    return new Promise(resolve => {
        setTimeout(() => {
            this.size = size
            console.log(`Tempat parkit berhasil dibuat dengan kapasitas ${size} kendaraan`),
                resolve(
                    Park,
                    Leave,
                    Check
                )
        }, 5000);

    })
}

function ParkingLot() {
    this.capacity = size
    this.remaining = size - parkedCars.length
    this.parkedCars = parkedCars
}


function Park(newCar) {
    return new Promise(resolve => {
        if (parkedCars.includes(newCar)) {
            resolve(console.log(`Mobil ${newCar.owner} dengan nopol ${newCar.licensePlate} sudah parkir sebelumnya`))
        } else if (parkedCars.length == size) {
            resolve(console.log('Mohon maaf parkir sudah penuh'))
        } else {
            setTimeout(() => {
                parkedCars.push(newCar)
                resolve(console.log(`Mobil ${newCar.owner} dengan nopol ${newCar.licensePlate} berhasil parkir`))
            }, 3000);
        }
    })
}

function Leave(availableCar) {
    return new Promise(resolve => {
        isExist = false
        index = null
        for (const key in parkedCars) {
            if (parkedCars[key].licensePlate == availableCar) {
                isExist = true
                index = key
            }
        }
        if (isExist) {
            setTimeout(() => {
                console.log(`Mobil ${parkedCars[index].owner} dengan nopol ${availableCar} sudah keluar`)
                resolve(parkedCars.splice(index, 1))
            }, 1500);
        } else {
            resolve(console.log(`Mobil dengan nopol ${availableCar} tidak ada`))
        }
    })
}

function Check() {
    return new Promise(resolve => {
        setTimeout(() => {
            const parkingLot = new ParkingLot()
            parkingLot.capacity = size
            parkingLot.remaining = size - parkedCars.length
            parkingLot.parkedCars = parkedCars
            resolve(console.log(parkingLot))
        }, 500);
    })
}

async function doPark() {

    const mobil1 = new Car('BE001', 'Alex')
    const mobil2 = new Car('B2021', 'Blex')
    const mobil3 = new Car('C012', 'Clex')
    const mobil4 = new Car('D0101', 'Dlex')
    const mobil5 = new Car('EE001', 'Eee')

    await createPark(3)

    await Park(mobil1)
    await Check()
    await Park(mobil2)
    await Leave('B2021')
    await Park(mobil3)
    await Park(mobil4)
    await Leave('B2019')
    await Park(mobil5)
    await Park(mobil1)
    await Leave('B2021')
    await Check()
    await Leave('BE001') 
    await Check()

}

doPark()
