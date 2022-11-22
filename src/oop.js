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
    constructor(val, next = null, prev = null) {
        if (val === undefined || val === null) throw new Error("val is required!");
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor (arr = []) {
        this.head = null;
        this.tail = null;

        for (let x of arr) {
            this.push(x);
        }
    }

    push (x) {
        if (this.tail === null) {
            // if length = 0
            this.tail = new Node(x);
            this.head = this.tail;
        } else {
            // if length > 0
            this.tail.next = new Node(x, this.tail, null);
            this.tail = this.tail.next;
        }
    }

    pop () {
        if (this.head === null) {
            throw new Error("noSuchElementException");
        } else {
            let result = this.head.val; // saved head.val
            if (this.head === this.tail) {
                // if length = 1 (head === tail)
                this.head = null;
                this.tail = null;
            } else {
                // if length > 1
                this.head = this.head.next;
                this.head.prev = null;
            }
            return result;
        }
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
