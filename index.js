function BMI()
{
    if(document.getElementById('weight').value==0 && document.getElementById('height').value==0)
    {
        document.getElementById('result').innerHTML = "Please enter a valid input";
    }
    else
    {
        var w = document.getElementById('weight').value;
        var h = document.getElementById('height').value;
        var bmi = (w/(h/100*h/100)).toFixed(1);
        document.getElementById('result').innerHTML = bmi;
        if(bmi<18.5)
        {
            document.getElementById('result').innerHTML = "You are Underweight with BMI of " + bmi + " Kg/squarecm";
        }
        else if(bmi>=18.5 && bmi<=24.9)
        {
            document.getElementById('result').innerHTML = "You are Normal weight with BMI of " + bmi + " Kg/squarecm";
        }
        else if(bmi>=25.0 && bmi<=29.9)
        {
            document.getElementById('result').innerHTML = "You are Overweight with BMI of " + bmi + " Kg/squarecm";
        }
        else if(bmi>=30.0 && bmi<=34.9)
        {
            document.getElementById('result').innerHTML = "You are Obese with BMI of " + bmi + " Kg/squarecm";
        }
        else
        {
            document.getElementById('result').innerHTML = "You are Extremely Obese with BMI of " + bmi + " Kg/squarecm";
        }
    }
}
