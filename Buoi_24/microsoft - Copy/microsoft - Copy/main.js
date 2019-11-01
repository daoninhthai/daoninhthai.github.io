function myFunction() {
    var x = document.getElementById("main-menu");
    if (x.className === "main-menu") {
      x.className += " responsive";
    } else {
      x.className = "main-menu";
    }
  }

/**
 * Debounce function to limit rapid invocations.
 * @param {Function} func - The function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait = 300) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

