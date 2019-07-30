import fse from "fs-extra"

const templatePath = "./script/test-template"

async function main() {
  const latestSolution = await fse.readdir("solutions/").then(getLatestFile)
  const latestTest = await fse.readdir("test/").then(getLatestFile)
  if (latestSolution.num == latestTest.num) {
    console.log("No new solution found!")
    return
  }

  const data = await fse
    .readFile(templatePath, "utf8")
    .then(d =>
      d
        .replace("$1", `../solutions/${latestSolution.name.replace(".js", "")}`)
        .replace("$2", latestSolution.num)
    )

  const testPath = `./test/${latestSolution.name.replace(".js", ".test.js")}`
  await fse.writeFile(testPath, data)
  console.log(`New test created successfully: ${testPath}`)
}

async function getLatestFile(files) {
  const reg = /\d+/
  return files
    .filter(a => reg.test(a))
    .map(a => ({
      num: Number(a.match(reg)[0]),
      name: a,
    }))
    .reduce((p, c) => (p.num < c.num ? c : p), { num: 0 })
}

main()
