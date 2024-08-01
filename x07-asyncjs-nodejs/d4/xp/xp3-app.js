const { readFile, writeFile } = require('./xp3-filemanager');

async function main() {
  try {
    const helloWorldContent = await readFile('xp3 Hello world.txt');
    console.log(`Content of "xp3 Hello world.txt": ${helloWorldContent}`);

    const newContent = 'Writing to the file';
    await writeFile('xp3 Bye world.txt', newContent);

    const byeWorldContent = await readFile('xp3 Bye world.txt');
    console.log(`Content of "xp3 Bye World.txt": ${byeWorldContent}`);
  } catch (error) {
    console.error(error.message);
  }
}

main();
