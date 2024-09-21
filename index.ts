import ky from 'ky';

async function doWork() {
  const token = await ky('https://httpbin.org/get');
  const response = await token.text();
  console.log(response);
}

doWork().then(() => {
  console.log('done!');
});
