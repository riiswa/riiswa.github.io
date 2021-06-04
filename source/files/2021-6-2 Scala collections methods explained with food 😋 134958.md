# Scala collections methods explained using food 😋

```scala
List(🍗, 🥦, 🍗, 🍗).collect{case 🍗 => eat(🍗)} = List(🦴, 🦴, 🦴)

List(🍗, 🥦, 🍗, 🍗).collectFirst{case 🍗 => eat(🍗)} = Some(🦴)

List(🍓, 🍇).concat(List(🍉, 🍋)) = List(🍓, 🍇, 🍉, 🍋)

List(🍎, 🍏).corresponds(List(🍎, 🍏))(_ == _) = true

List(🍎, 🥕, 🍌, 🧅).count(isFruit) = 2

List(🍎, 🍏, 🍐, 🥕, 🍊).drop(2) = List(🍐, 🥕, 🍊)

List(🍎, 🍏, 🍐, 🥕, 🍊).dropRight(2) = List(🍎, 🍏, 🍐)

List(🍎, 🍏, 🍐, 🥕, 🍊).dropWhile(isFruit) = List(🥕, 🍊)

List(🍎, 🥕, 🍌, 🧅).empty = List()

List(🥑, 🥦, 🍓, 🥬).exists(🍓) = true

List(🍎, 🥕, 🍌, 🧅).filter(isFruit) = List(🍎, 🍌)

List(🍎, 🥕, 🍌, 🧅).filterNot(isFruit) = List(🥕, 🧅)

List(🥑, 🥦, 🍓, 🥬).find(isFruit) = Some(🍓)

List(List(🥦), List(🍏, 🥕), List(🧅)).flatten() = List(🥦, 🍏, 🥕, 🧅)

List(🍎, 🍏, 🍐).forall(isFruit) = true

List(🍓, 🥒, 🍗, 🍒, 🥕, 🍖).groupBy(category) = Map(
    "fruits" -> List(🍓, 🍒),
    "vegetables" -> List(🥒, 🥕),
    "meat" -> List(🍗, 🍖)
)

List(🍓, 🥒, 🍗, 🍒, 🥕, 🍖).grouped(2) = List(
    List(🍓, 🥒), List(🍗, 🍒), List(🥕, 🍖)
)

List(🍎, 🥕, 🍌, 🧅).head = 🍎

List(🍎, 🥕, 🍌, 🧅).init = List(🍎, 🥕, 🍌)

List(🍎, 🥕, 🍌, 🧅).inits = List(
    List(🍎, 🥕, 🍌, 🧅),
    List(🍎, 🥕, 🍌),
    List(🍎, 🥕),
    List(🍎),
    List()
)

List().isEmpty = true

List(🍎, 🥕, 🍌, 🧅).last = 🧅

List(🥚, 🥔, 🥩).map(cook) = List(🍳, 🍟, 🍔)

List(🧀, 🍔, 🥬).maxBy(calory) = 🍔

List(🧀, 🍔, 🥬).minBy(calory) = 🥬

List(🍎).nonEmpty = true

List(🍎, 🥕, 🍌, 🧅).partition(isFruit) = (List(🍎, 🍌), List(🥕, 🧅))

List(🍅, 🥬, 🍞).reduce(_ + _) = 🥪

List(🍅, 🍏).size = 2

List(🍅, 🍏).sizeCompare(List(🧀, 🍔, 🥬)) = -1

List(🍎, 🍏, 🍐, 🥕, 🍊).slice(2, 4) = List(🍐, 🥕)

List(🍓, 🥒, 🍗, 🍒, 🥕, 🍖).sliding(3) = List(
    List(🍓, 🥒, 🍗),
    List(🥒, 🍗, 🍒),
    List(🍗, 🍒, 🥕),
    List(🍒, 🥕, 🍖)
)

List(🍎, 🥕, 🍌, 🧅).span(isFruit) = (List(🍎), List(🥕, 🍌, 🧅))

List(🍎, 🍏, 🍐, 🥕, 🍊).splitAt(3) = (List(🍎, 🍏, 🍐), List(🥕, 🍊))

List(🍎, 🥕, 🍌, 🧅).tail = List(🥕, 🍌, 🧅)

List(🍎, 🥕, 🍌, 🧅).tails = List(
    List(🍎, 🥕, 🍌, 🧅),
    List(🥕, 🍌, 🧅),
    List(🍌, 🧅),
    List(🧅),
    List()
)

List(🍎, 🍏, 🍐, 🥕, 🍊).take(2) = List(🍎, 🍏)

List(🍎, 🍏, 🍐, 🥕, 🍊).takeRight(2) = List(🥕, 🍊)

List(🍎, 🍏, 🍐, 🥕, 🍊).takeWhile(isFruit) = List(🍎, 🍏, 🍐)

List((🍎, 🥕), (🍌, 🧅)).unzip = (List(🍎, 🍌), List(🥕, 🧅))

List(🍎, 🍌).zip(List(🥕, 🧅)) = List((🍎, 🥕), (🍌, 🧅))
```

