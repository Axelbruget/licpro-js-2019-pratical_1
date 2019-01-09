module.exports = class Student{
	constructor(firstName,lastName){
		this.firstName = firstName;
		this.lastName = lastName;	
		this.level = 1;
		this.grade = [];

		this.fullName = this.fullName.bind(this);
		this.examen = this.examen.bind(this);
		this.average = this.average.bind(this);
	}

	fullName(){
		return this.firstName + " " + this.lastName;
	}

	examen(firstParam){
		if (this.level > 10 || this.level < 0 || this.level == null)
			throw new Error();

		if (firstParam !== undefined)
			this.grade.push(firstParam(this.level));
		else
			this.grade.push("def");
	}

	average(){
		let avg = 0;
		let count = 0;

		for (let elt in this.grade){
			if (this.grade[elt] != "def"){
				avg += this.grade[elt];
			}
			count ++;
		}

		if (count === 0) return 0;
		return avg/count;
	}
};

