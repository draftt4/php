const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ельвира",
            "id_2": "Наташа",
            "id_3": "Анна",
            "id_4": "Екатерина",
            "id_5": "Инна",
            "id_6": "Юлия",
            "id_7": "Мария",
            "id_8": "Даниела",
            "id_9": "София",
            "id_10": "Татяна"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
     
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    randomFirstName: function() {
            if (male){
            this.randomFirstName() = this.randomValue(this.firstNameMaleJson);
            }else if (fimale) {
                this.randomFirstName () = this.randomValue(this.firstNameFemaleJson);
            }
            return this.randomFirstName(male,fimale);
        },

         

     randomSurname: function() {

       if (this.GENDER_FEMALE) {
           this.randomValue(this.randomSurname) + 'a';
       } else if (this.GENDER_MALE) {
           this.randomValue(this.randomSurname);
        }
    },

    randomDate: function () {
        let Year = Math.floor(Math.random() * 2022) + 1;
        let Month = Math.floor(Math.random() * 12) + 1;
        let Day = Math.floor(Math.random() * 30) + 1;
        let dateOfBirth =  `${Year}-${Month}-${Day}`;
    },
      
    
     randomGander: function(gender) {
       gender = female ? this.GENDER_FEMALE:this.GENDER_MALE;
     },
     

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.randomDate = randomDate();
        return this.person;
    }
};
