// Variables and functions Here
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array)
{
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// Story Texts Here
let storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX=['Willy the Goblin','Big Daddy','Father Christmas'];

let insertY=['the soup kitchen','Disneyland','the White House'];
let insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//Functionalities Here
randomize.addEventListener('click', result);

function result() {
    let mainStory=storyText;
  if(customName.value !== '') {
     let name = customName.value;
     storyText=storyText.replace(/Bob/g,name);
  }
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    weight = Math.round(weight/14);
    let temperature =  Math.round(94);
    temperature=Math.round((temperature-32)*5/9);
    storyText=storyText.replace('94 fahrenheit',temperature+' centigrade');
    storyText=storyText.replace('300 pounds',weight+' stone');
  }
storyText=storyText.replace(/:insertx:/g,randomValueFromArray(insertX));
storyText=storyText.replace(/:inserty:/g,randomValueFromArray(insertY));
storyText=storyText.replace(/:insertz:/g,randomValueFromArray(insertZ));
  story.textContent =storyText;
  story.style.visibility = 'visible';
  
  storyText=mainStory;
}