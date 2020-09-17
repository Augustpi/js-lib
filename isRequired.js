const isRequired = () => { throw new Error('param is required'); };

const hello = (name = isRequired()) => { console.log(`hello ${name}`) };

// These will throw errors
hello();
hello(undefined);

// These will not
hello(null);
hello('David');