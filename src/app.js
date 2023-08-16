/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "my"];
  let adj = ["colorful", "magical"];
  let noun = ["rainbow", "unicorn", "castle"];

  function generateDomainNames(arr1 = [], arr2 = [], arr3 = []) {
    let domainNames = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          domainNames.push(arr1[i] + arr2[j] + arr3[k] + ".com");
        }
      }
    }
    return domainNames;
  }

  let magicalDomainNames = generateDomainNames(pronoun, adj, noun);
  console.log(magicalDomainNames);

  let list = magicalDomainNames.map(element => `<li>${element}</li>`);

  document.querySelector("#domainName").innerHTML = list.join("");
};
