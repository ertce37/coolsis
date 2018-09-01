package beans;
// beans  --> used to represent a certain type of object

import java.util.Date;
import java.util.Random;

import com.github.javafaker.Faker;

import utilities.ConfigurationReader;

// pojo  --> plain old java object,  used to represent a certain type of object
// model   --> used to represent a certain type of object

public class UserStudent {

	static Faker faker = new Faker();
	Random rd = new Random();
	static Date dateOfBirth1 = faker.date().birthday(6, 16);

	public String sfirstName = faker.name().firstName();
	public String slastName = faker.name().lastName();
	public Date dateOfBirth = faker.date().birthday(5, 16);
	public String birthDay = dateOfBirth + "";

	// public static void main(String[] args) {
	// Faker faker = new Faker();
	//
	// System.out.println(dateOfBirth());
	//
	//
	// }
	public static String dateOfBirth() {

		String birthDay1 = dateOfBirth1 + "";
		birthDay1 = "7/" + birthDay1.split(" ")[2] + "/" + birthDay1.split(" ")[5];
		return birthDay1;
	}

	public static int sGrade() {
		int currentYear = Integer.parseInt(ConfigurationReader.getProperty("currentYear"));
		String birthYear = dateOfBirth1 + "";
		int grade = currentYear - Integer.parseInt(birthYear.split(" ")[5]) - 5;

		return grade;

	}

}
