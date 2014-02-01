// Generated by CoffeeScript 1.6.3
(function() {
  var bind_decimal, bind_delete_key, bind_number_key, bind_select, cpis, discount, get_value;

  cpis = {
    2014: 233.069,
    2013: 233.069,
    2012: 229.594,
    2011: 224.939,
    2010: 218.056,
    2009: 214.537,
    2008: 215.303,
    2007: 207.342,
    2006: 201.6,
    2005: 195.3,
    2004: 188.9,
    2003: 184.0,
    2002: 179.9,
    2001: 177.1,
    2000: 172.2
  };

  discount = function(table, amount, start_year, end_year) {
    if (end_year == null) {
      end_year = (new Date()).getFullYear();
    }
    return (amount * (table[start_year] / table[end_year])).toFixed(2);
  };

  bind_number_key = function(n, input) {
    return $("#key-" + n).click(function() {
      var previous;
      previous = $(input).val();
      $(input).val("" + previous + n);
      $(input).trigger('input');
      return false;
    });
  };

  bind_select = function(select, input) {
    return $(select).change(function() {
      return $(input).trigger('input');
    });
  };

  bind_delete_key = function(del, input) {
    return $(del).click(function() {
      var previous;
      previous = $(input).val();
      $(input).val(previous.substr(0, previous.length - 1));
      return $(input).trigger('input');
    });
  };

  bind_decimal = function(decimal, input) {
    return $(decimal).click(function() {
      var previous;
      previous = $(input).val();
      console.log(previous);
      if (_.contains(previous, ".") && previous.length > 0) {
        return false;
      }
      if (previous.length === 0) {
        $(input).val("0.");
      } else {
        $(input).val("" + previous + ".");
      }
      return $(input).trigger('input');
    });
  };

  get_value = function(id) {
    return $(id).val();
  };

  $(function() {
    _.each(_.range(0, 10), function(n) {
      return bind_number_key(n, "#input-val");
    });
    bind_decimal("#decimal", "#input-val");
    bind_delete_key("#delete", "#input-val");
    bind_select("#start-year", "#input-val");
    bind_select("#end-year", "#input-val");
    return $('#input-val').on('input', function() {
      return $("#output-val").html(discount(cpis, get_value("#input-val"), get_value('#start-year'), get_value('#end-year')));
    });
  });

}).call(this);
