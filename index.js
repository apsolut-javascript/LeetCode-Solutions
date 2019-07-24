import debug from "debug"

const log = debug("index")
const a = new Set()
const size = 1000000

log("warmup start")
for (let i = 0; i < size; i++) {
  a.add(i)
}
a.clear()

log("warmup end")

log("normal start")
for (let i = 0; i < size; i++) {
  a.add(i)
}
for (let i = 0; i < size; i++) {
  a.add(i)
}
a.clear()

log("normal end")

log("checking start")
for (let i = 0; i < size; i++) {
  a.add(i)
}
for (let i = 0; i < size; i++) {
  if (!a.has(i)) a.add(i)
}
a.clear()

log("checking end")
