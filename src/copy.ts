document.getElementById("copyButton").addEventListener("click", function () {
    var textToCopy = document.getElementById("textToCopy") as HTMLInputElement;
    if (textToCopy) {
      textToCopy.select();
      document.execCommand("copy");
      document.getElementById("customAlert").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("customAlert").classList.add("hidden");
      }, 2000);
    } else {
      console.error(
        "The element with id 'textToCopy' does not exist or is not an input element of type text."
      );
    }
  });

  document.getElementById("closeAlert").addEventListener("click", function () {
    document.getElementById("customAlert").classList.add("hidden");
  });