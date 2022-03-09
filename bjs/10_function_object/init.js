
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('firstNameOutput').textContent = initPerson.firstName;
    document.querySelector('surnameOutput').textContent = initPerson.surName;
    document.querySelector('genderOutput').textContent = initPerson.gender;
    document.querySelector('birthYearOutput').textContent = initPerson.randomDate;
    document.querySelector('birthYearOutput').textContent = initPerson.randomDate;
};

