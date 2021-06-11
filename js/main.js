class ColeccionElementos extends Array {
    on = (evt, cb) => {
      this.forEach((elem) => elem.addEventListener(evt, cb));
    };

    removeClass = (clase) => {
      this.forEach((elem) => elem.classList.remove(clase));
    };
    addClass = (clase) => {
      this.forEach((elem) => elem.classList.add(clase));
    };
  }

  const $ = (dir) =>
    typeof dir === "string"
      ? new ColeccionElementos(...document.querySelectorAll(dir))
      : new ColeccionElementos(dir);

  $(document).on("scroll", (e) =>
    window.scrollY != 0
      ? $("header").addClass("sticky")
      : $("header").removeClass("sticky")
  );