import fse from "fs-extra";

const templatePath = "./script/test-template";

async function main() {
  const newFiles = await fse.readdir(".").then(getJsFiles);
  console.log("---------> : main -> newFiles", newFiles);
  await Promise.all(newFiles.map(a => fse.move(a.name, `solutions/${a.name}`)));
  const [solutions, tests] = await Promise.all([
    fse.readdir("solutions/").then(getJsFiles),
    fse.readdir("test/").then(getJsFiles),
  ]);

  const newSolutions = solutions.filter(a => tests.every(b => b.num != a.num));
  if (newSolutions.length == 0) {
    console.log("No new solution found!");
    return;
  }

  const promisies = newSolutions.map(async a => {
    const data = await fse
      .readFile(templatePath, "utf8")
      .then(d =>
        d
          .replace("$1", `../solutions/${a.name.replace(".js", "")}`)
          .replace("$2", a.num)
      );

    const testPath = `./test/${a.name.replace(".js", ".test.js")}`;
    await fse.writeFile(testPath, data);
    console.log(`New test created successfully: ${testPath}`);
  });

  await Promise.all(promisies);
  console.log("All test files created!");
}

async function getJsFiles(files) {
  const reg = /^(\d+).*\.js$/;
  return files
    .filter(a => reg.test(a))
    .map(a => ({
      num: Number(a.match(reg)[1]),
      name: a,
    }));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
