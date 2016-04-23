function number_format(number, decimals, dec_point, thousands_sep) {

  number = (number + '')
  .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
  prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
  sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
  dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
  s = '',
  toFixedFix = function (n, prec) {
  var k = Math.pow(10, prec);
  return '' + (Math.round(n * k) / k)
  .toFixed(prec);
  };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
  .split('.');
  if (s[0].length > 3) {
  s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
  .length < prec) {
  s[1] = s[1] || '';
  s[1] += new Array(prec - s[1].length + 1)
  .join('0');
  }
  return s.join(dec);
}

//$250K+ or 60 months + show Call Us
function resultHide () {
  $('#fielq_frm .box').show();
  $('#fielq_frm .box-area-result').hide();
}
function resultShow () {
  $('#fielq_frm .box').hide();
  $('#fielq_frm .box-get-start-now').show();
  $('#fielq_frm .box-area-result').show();
}

//if choose Custom link
function callUsShow() {
  update_slider(72, 72)
  $('#slider2 a').text('Call Us');
  resultShow();
}

function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }

  if ($('#lease_amount').val() == '$251,000' || $('#term_length').val() == '72 Months') {
    
    if ($('#lease_amount').val() == '$251,000') {
      $('#slider a').text('Call Us');
      resultShow();
    }
    if ($('#term_length').val() == '72 Months') {
      $('#slider2 a').text('Call Us');
      resultShow();
    }

  } else resultHide();

  return val;
}

function calculateLease(Term, LoanAmount) {

  var minRate;
  var maxRate;
  var estimated_payment1;
  var estimated_payment2;
  
  if (LoanAmount >= 100000) {
      minRate = 0.04;
      maxRate = 0.14;
   } else {
      minRate = 0.09;
      maxRate = 0.14;
   }

   if ( LoanAmount >0 ){
	  estimated_payment1 = ((minRate / 12) + ((minRate / 12) / ((Math.pow((1 + (minRate / 12)),Term)) - 1))) * LoanAmount; 
	  estimated_payment2 = ((maxRate / 12) + ((maxRate / 12) / ((Math.pow((1 + (maxRate / 12)),Term)) - 1))) * LoanAmount; 
   }
    
    $("#estimated_payment").html('$' + commaSeparateNumber(Math.floor(estimated_payment1)) + ' to $' + commaSeparateNumber(Math.floor(estimated_payment2))+ ' <span class="bymonth"> / Month</span>');
   
}


function calculateLeaseNew(Term, LoanAmount) {

  var minRate;
  var maxRate;
  var estimated_payment1;
  var estimated_payment2;
  
  if (LoanAmount >= 25001) {
      
      if(Term == 24){  
            minRate = 0.04351;
            maxRate = 0.04426;
        }
        
        if(Term == 36){  
            minRate = 0.02972;
            maxRate = 0.03052;
        }
        
        if(Term == 48){  
            minRate = 0.02284;
            maxRate = 0.02367;
        }
        
        if(Term == 60){  
            minRate = 0.01871;
            maxRate = 0.01957;
        }
      
      
   } else {
       
      if(Term == 24){  
            minRate = 0.0437;
            maxRate = 0.04445;
        }
        
        if(Term == 36){  
            minRate = 0.02992;
            maxRate = 0.03072;
        }
        
        if(Term == 48){  
            minRate = 0.02304;
            maxRate = 0.02388;
        }
        
        if(Term == 60){  
            minRate = 0.01892;
            maxRate = 0.01979;
        }
   }

    if (LoanAmount > 0){
      estimated_payment1 = minRate * LoanAmount; 
      estimated_payment2 = maxRate * LoanAmount; 
    }
    $("#estimated_payment").html('$' + commaSeparateNumber(Math.floor(estimated_payment1)) + ' to $' + commaSeparateNumber(Math.floor(estimated_payment2))+ ' <span class="bymonth"> / Month</span>');
   
}