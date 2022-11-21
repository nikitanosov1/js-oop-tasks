const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });

        it ('вставка некорректных пар возвращает undefined', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.set(null, null), undefined);
            assert.strictEqual(dic.set(undefined, undefined), undefined);
            assert.strictEqual(dic.set(undefined, null), undefined);
            assert.strictEqual(dic.set(null, undefined), undefined);
            assert.strictEqual(dic.set("car", undefined), undefined);
            assert.strictEqual(dic.set(undefined, "car"), undefined);
            assert.strictEqual(dic.set("car", null), undefined);
            assert.strictEqual(dic.set(null, "car"), undefined);
            assert.strictEqual(dic.set([1, 2, 3], "car"), undefined);
            assert.strictEqual(dic.set([1, 2, 3], [1, 2, 3]), undefined);
            assert.strictEqual(dic.set("privet", Symbol("symbol")), undefined);
        });

        it ('проверка вставки и получения корректных данных', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(dic.get("povestka"), undefined);
            dic.set("povestka", "tomorrow");
            assert.strictEqual(dic.get("povestka"), "tomorrow");
            assert.strictEqual(dic.get("povestka"), "tomorrow");
            dic.set("word1", "word2");
            dic.set("word2", "word3");
            assert.strictEqual(dic.get("word1"), "word2");
            assert.strictEqual(dic.get("word2"), "word3");
        });
    });
});