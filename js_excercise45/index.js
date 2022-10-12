function cars(manufacturer, model, color, speed) {
    const car = {
        manufacturer,
        model,
    }

    if (color) {
        car["color"] = color;
    }

    if (speed) {
        car["speed"] = speed;
    }

    return car;
}

console.log(cars("Toyota", "Carolla", "Black", 1600))

