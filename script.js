  const buttons = document.querySelectorAll("nav button");
    const pages = document.querySelectorAll(".page");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const targetPage = button.dataset.page;

        // Update active button
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Show the selected "page"
        pages.forEach(page => {
          page.classList.toggle("active", page.id === targetPage);
        });
      });
    });
const actionButton = document.getElementById("action-button");
const actionOutput = document.getElementById("action-output");

const actionIdeas = [
  "Try bringing a reusable water bottle tomorrow.",
  "Keep a tote bag near the door for your next shopping trip.",
  "Ask for no plastic cutlery when you order food.",
  "Reuse a clean container instead of throwing it away."
];

let nextIdea = 0;

if (actionButton && actionOutput) {
  actionButton.addEventListener("click", function () {
    actionOutput.textContent = actionIdeas[nextIdea];
    nextIdea = (nextIdea + 1) % actionIdeas.length;
  });
}

const pledgeButton = document.getElementById("pledge-button");
const pledgeCount = document.getElementById("pledge-count");

let promisesThisVisit = 0;

if (pledgeButton && pledgeCount) {
  pledgeButton.addEventListener("click", function () {
    promisesThisVisit += 1;
    pledgeCount.textContent =
      `Nice! You picked an idea ${promisesThisVisit} time(s) during this visit. Small steps count!`;
  });
}
