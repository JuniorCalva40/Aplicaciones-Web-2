 function wait(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
 
  async function go() {
    console.log('Hola que tal');
    await wait(2000);
    console.log('Bla bla bla');
    await wait(2000);
    console.log('Bla bla bla');
    await wait(2000);
    console.log('Un Gusto conocerte Adios');
  }

  go();
