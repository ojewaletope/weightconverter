 var app = {
   appCtrl: function () {
     var _output = document.getElementById('output');
     _output.style.visibility = "hidden";
      var _input = document.getElementById('poundsInput');
     _input.addEventListener('input', function (e) {
       _output.style.visibility = "visible";
        var _pounds = e.target.value;
        var _gramsOutput = document.getElementById('gramsOutput');
        _gramsOutput.innerHTML = _pounds / 0.0022046;

        // Kilogram output
        var _kgOutput = document.getElementById('kgOutput');
        _kgOutput.innerHTML = _pounds / 2.2046;

        // pounds output
        var _ounceOutput = document.getElementById('ounceOutput');
        _ounceOutput.innerHTML = _pounds * 16;
      });
    }
  };
