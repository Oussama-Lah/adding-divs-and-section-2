const inp = document.querySelector("input[type='number']");
const ele = document.querySelector("input[type='text']");
const btn = document.querySelector("input[type='submit']");
const option = document.querySelector("select[name='type']");
const rslt = document.querySelector(".results");

btn.addEventListener("click", function (e) {
  rslt.innerHTML = " "; // we are using this so we can append each div into the reslut so here rlst works as a container;
  if (ele.value !== "" && inp.value !== "") {
    for (let i = 0; i < inp.value; i++) {
      let value = document.createElement(option.value);
      value.className = "box";
      value.title = "Element";
      value.id = `id-${i + 1}`;
      value.textContent = ele.value;
      rslt.appendChild(value); // here for each iteration the div is appended a number of time in this case it's input value of times
    }
  } else {
    //this part so we can warne the user thatn one of the boxes is not filled.
    let wraning = document.createElement("p");
    wraning.textContent = "Warning!!! You have not completed the boxes";
    wraning.className = "warning";
    wraning.style.color = "red";
    rslt.appendChild(wraning);
  }
  e.preventDefault();
});

//document.forms[0].onclick = (e) => e.preventDefault(); //instead of using this i can jsut put e in the event listner function and in the end of the function write e.pre..() look in the code above;
