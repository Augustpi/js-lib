var stream = function* () {
    const data = [
        { "id": 1 },
        { "id": 2 },
        { "id": 3 },
        { "id": 4 },
        { "id": 5 },
        { "id": 6 },
        { "id": 7 },
        { "id": 8 },
        { "id": 9 },
        { "id": 10 }
    ]
    for (var i = 0; i < data.length; i++) {
        yield { item: data[i], idX: i }
    }
}
// Kullanım şekilleri
var newIterable = stream()
for await (item of newIterable) {
    console.log(item.item.id, item.idX)
}
// 2
var newIterable2 = stream()
newIterable2.next() // id: 522868, done: false
newIterable2.next()
newIterable2.next()
newIterable2.next()
newIterable2.next()
//..
newIterable2.next()
newIterable2.next()
newIterable2.next()
newIterable2.next()
newIterable2.next()
newIterable2.next()
newIterable2.next()
var newIterable3 = stream()
var item = newIterable3.next()
console.log("item", item.value, "item status", item.done)
console.log("item", item.value, "item status", item.done)
console.log("lack of iterable", [...newIterable3]);