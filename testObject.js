"use strict";

function testObject() {
    var person1 = new Person("ruben", "hernandez");
    var person2 = new Person("paco", "perez");
    var person3 = new Person("ana", "diaz");
    var person4 = new Person("juan", "lopez");
    var person5 = new Person("cambio", "elemento");
    var ObjectList = new list();

    console.log("Empty list: " + ObjectList.isEmpty());
    console.log("Full list: " + ObjectList.isFull());
    console.log("Size: " + ObjectList.size());
    console.log("Capacity: " + ObjectList.capacity());
    console.log("");

    console.log("Add people to the list");
    ObjectList.add(person1);
    ObjectList.add(person2);
    ObjectList.add(person3);
    ObjectList.add(person4);
    console.log(ObjectList.toStirng());
    console.log("Size: " + ObjectList.size());
    console.log("");

    console.log("Add people to the list indicating the index");
    ObjectList.addAt(person1, 1);
    console.log(ObjectList.toStirng());
    console.log(ObjectList.size());
    console.log("");

    console.log("Get element indicating the index")
    console.log(ObjectList.get(2));
    console.log("");

    console.log("List in text format");
    console.log(ObjectList.toStirng());
    console.log("")

    console.log("Position of the indicated element");
    console.log(ObjectList.indexOf(person4));
    console.log("Position indicating the element starting at the end");
    console.log(ObjectList.lastIndexOf(person2));
    console.log("");

    console.log("First item in the list: " + ObjectList.firstElement());
    console.log("Last item in the list: " + ObjectList.lastElement());
    console.log("");

    console.log("Replaces the item in the list indicated by the index");
    ObjectList.set(person5, 1);
    console.log(ObjectList.toStirng());
    console.log("");

    console.log("Eliminar: " + ObjectList.remove(2));
    console.log(ObjectList.toStirng());
    console.log("");
    console.log("Eliminar elemento: " + ObjectList.removeElement(person1));
    console.log(ObjectList.toStirng());
    console.log("Eliminar elemento: " + ObjectList.removeElement(person3));
    console.log(ObjectList.toStirng());
    console.log("");


    console.log("Clear the list");
    ObjectList.clear();
    console.log(ObjectList.toStirng());
    console.log("Size: " + ObjectList.size());
}
window.onload = testObject;