var app = {
  appCtrl: function() {
    // Declare all variable
    var _result = document.getElementById("result");
    var _input = document.getElementById("input");
    var _output = document.getElementById("output");
    var _gramsResult = document.getElementById("gramsResult");
    var _kiloResult = document.getElementById("kiloResult");
    var _ouncesResult = document.getElementById("ouncesResult");
    var _poundsResult = document.getElementById("poundsResult");
    var _selectItem = document.getElementById("selectItem");
    var _gramsOutput = document.getElementById("gramsOutput");
    var _kgOutput = document.getElementById("kgOutput");
    var _ounceOutput = document.getElementById("ounceOutput");
    var _poundsOutput = document.getElementById("poundsOutput");

    // Hide the input and output display
    _result.style.display = "none";
    _output.style.display = "none";

    // select the unit of measurement
    _selectItem.addEventListener("change", () => {
      // if the selected unit is pounds
      if (_selectItem.value === "pounds") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          // set output to visible
          _output.style.display = "block";
          // set the other results div to display block and the pounds result to display none
          _gramsResult.style.display = "block";
          _kiloResult.style.display = "block";
          _ouncesResult.style.display = "block";
          _poundsResult.style.display = "none";
          // get the input value and save in a var
          var _weight = e.target.value;

          // display the output
          _gramsOutput.innerHTML = _weight / 0.0022046 + "g";
          // Kilogram output
          _kgOutput.innerHTML = _weight / 2.2046 + "kg";
          // ounce output
          _ounceOutput.innerHTML = _weight * 16 + "oz";
        });
      } else if (_selectItem.value === "grams") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          _output.style.display = "block";
          var _weight = e.target.value;

          _gramsResult.style.display = "none";
          _poundsResult.style.display = "block";
          _kiloResult.style.display = "block";
          _ouncesResult.style.display = "block";

          // Kilogram output
          _kgOutput.innerHTML = _weight / 1000 + "kg";

          // pounds output
          _ounceOutput.innerHTML = _weight * 0.03527 + "oz";

          _poundsOutput.innerHTML = _weight * 0.0022046 + "lbs";
        });
      } else if (_selectItem.value === "kilograms") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          _output.style.display = "block";
          var _weight = e.target.value;
          _gramsResult.style.display = "block";
          _poundsResult.style.display = "block";
          _ouncesResult.style.display = "block";
          _kiloResult.style.display = "none";

          //output
          _gramsOutput.innerHTML = _weight / 1000 + "g";
          // pounds output
          _ounceOutput.innerHTML = _weight * 35.27 + "oz";
          _poundsOutput.innerHTML = _weight * 2.2046 + "lbs";
        });
      } else if (_selectItem.value === "ounces") {
        _result.style.display = "block";
        _input.addEventListener("input", (e) => {
          _output.style.display = "block";
          var _weight = e.target.value;
          _gramsResult.style.display = "block";
          _poundsResult.style.display = "block";
          _kiloResult.style.display = "block";
          _ouncesResult.style.display = "none";

          _kgOutput.innerHTML = _weight / 35.27 + "kg";
          // pounds output
          _gramsOutput.innerHTML = _weight / 0.03527 + "g";
          _poundsOutput.innerHTML = _weight / 16 + "lbs";
        });
      }
    });
  }
};
