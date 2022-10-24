const imageElements = document.getElementsByTagName("img");
for (let i = 0; i < imageElements.length; i++) {
  const altText = imageElements[i].getAttribute("alt");
  const parent = imageElements[i].parentElement;
  const newTextElement = document.createElement("p");
  newTextElement.textContent = altText;
  newTextElement.style["position"] = "absolute";
  newTextElement.style["font-size"] = "0";
  parent.appendChild(newTextElement);
}
