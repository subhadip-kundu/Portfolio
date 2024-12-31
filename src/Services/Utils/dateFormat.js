const dateFormat = (date, language) => {
	const monthNamesEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const monthNamesES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
	if (!date) return language === "es" ? "Presente" : "Present"; // Fallback for undefined or null dates
  
	const month = date.getMonth();
	const year = date.getFullYear();
	const today = new Date();
	
	// Check if the date matches today's date (current month and year)
	const isPresent = 
	  date.getFullYear() === today.getFullYear() &&
	  date.getMonth() === today.getMonth() &&
	  date.getDate() === today.getDate();
  
	if (isPresent) return language === "es" ? "Presente" : "Present";
  
	// Default formatted date
	return `${language === "es" ? monthNamesES[month] : monthNamesEN[month]} ${year}`;
  };
  
  export default dateFormat;
  