let age = document.getElementById('age');

function showUser(surname, name) {
	this.surname = surname;
	this.name = name;
    alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}

showUser('Ba','Babadook');