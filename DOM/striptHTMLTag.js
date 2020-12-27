

const originalString = `
  <div>
    <p>Hey that's <span>somthing</span></p>
  </div>
`;

const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");

console.log(strippedString);