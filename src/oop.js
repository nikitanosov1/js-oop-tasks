/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    
    calcLength() {
        return Math.sqrt(x * x + y * y);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    constructor (x, y, z = 0) {
        super(x, y);
        this.z = z;
    }

    static vectorLength(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Node {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor (arr = []) {
        this.head = new Node();
        this.tail = new Node();

        for (let x of arr) {
            this.push(x);
        }
    }

    push (x) {
        if (this.head.next === null) {
            this.head.next = new Node(x);
            this.tail.prev = this.head.next;
        } else {
            this.tail.prev.next = new Node(x, this.tail.prev, null);
            this.tail.prev = this.tail.prev.next;
        }
    }

    pop () {
        if (this.head.next === null) {
            return "noSuchElementException";
        } else if (this.head.next === this.tail.prev) {
            let result = this.head.next.val;
            this.head.next = null;
            this.tail.prev = null;
            return result;
        } else {
            let result = this.head.next.val;
            this.head.next = this.head.next.next;
            this.head.next.prev = null;
            return result;
        }

    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
