When does wire service run?
1. Deafult value for wired proeprties and function
==> A wired property, or a wired function's result object,is assigned a defualt 
   value after component construction and before any other lifecycle event.
==>The default value is an object with data and error properties of undefined
==> Once data is available, it goes in data while error will be undefined. if an
    error occurs, it goes in error while data will be undefined.
3. Wired function Execution
==>The function is invoked whenever a value is available,which can be before or           after the component is connected or rendered.
