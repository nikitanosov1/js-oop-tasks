"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [fam, name, ot] = new String(fio).split(' ')
    return name + ' ' + fam;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array = []) {
    if (array.length === 0) return false;
    const result = array.reduce((accumulator, currentValue) => {
        accumulator.max = Math.max(accumulator.max, currentValue);
        accumulator.min = Math.min(accumulator.min, currentValue);
        return accumulator;
    }, {min: array.at(0), max: array.at(0)})
    return result.max / result.min;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor () {
        this.map = new Map();
    }

    set (key, value) {
        if (typeof(key) !== 'string' || typeof(value) !== 'string') return false;
        return this.map.set(key, value);
    }

    get (key) {
        return this.map.get(key);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};