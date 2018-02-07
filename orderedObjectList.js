"use strict"

var SIZE = 5;
function Person(name, subname) {
    if (!(this instanceof Person)) {
        throw new InvalidAccessConstructorException();
    }
    this.name = name || "";
    this.subname = subname || "";
}

function list() {
    if (!(this instanceof list)) {
        throw new InvalidAccessConstructorException();
    }

    var _person = [];

    Object.defineProperty(this, "person", {
        get: function () {
            var nextIndex = 0;
            return {
                next: function () {
                    return nextIndex < _person.length ?
                        { value: _person[nextIndex++], done: false } :
                        { done: true }
                }
            }
        }
    });

    this.isEmpty = function () {
        var empty = false;
        if (_person.length === 0) {
            return empty = true;
        } else {
            return empty;
        }
    }
    this.isFull = function () {
        var isFull = false;
        if (_person.length === SIZE) {
            return isFull = true;
        } else {
            return isFull;
        }
    }
    this.size = function () {
        return _person.length;
    }

    this.add = function (person) {
        if (this.isFull()) {
            throw new isFullException();
        }
        _person.push(person);
        _person.sort(function (a, b) {
            if (a.subname == b.subname) {
                return (a.name > b.name);
            } else {
                return (a.subname > b.subname);
            }
        });
        return _person.length;
    }

    this.get = function (index) {
        if (index < 0 || index > SIZE) {
            throw new indexLimitException();
        }
        var person = _person[index];
        return person;
    }

    this.toStirng = function () {
        var str = "";
        for (let i = 0; i < _person.length; i++) {
            str = str + _person[i].name + " " + _person[i].subname + "\n";

        }
        return str;
    }

    this.indexOf = function (person) {
        var elem = _person.indexOf(person);
        return elem;
    }

    this.capacity = function () {
        return SIZE;
    }

    this.clear = function () {
        _person.length = 0;
    }

    this.firstElement = function () {
        if (this.isEmpty()) {
            throw new isFullException();
        }
        var first = _person[0].name + " " + _person[0].subname;
        return first;
    }

    this.lastElement = function () {
        if (this.isEmpty()) {
            throw new isFullException();
        }
        var last = _person[_person.length - 1].name + " " + _person[_person.length - 1].subname;
        return last;
    }

    this.remove = function (index) {
        if (index < 0 || index > SIZE) {
            throw new indexLimitException();
        }
        var element = _person.splice(index, 1);
        return element[0].name + " " + element[0].subname;
    }

    this.removeElement = function (person) {
        var elem = _person.indexOf(person);
        if (elem !== -1) {
            _person.splice(elem, 1);
            return true;
        } else {
            return false;
        }
    }
}
list.prototype = {};
list.prototype.constructor = list;