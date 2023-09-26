package beans;

import java.util.Random;

import com.github.javafaker.Faker;

import utilities.ConfigurationReader;

// beans  --> used to represent a certain type of object

// pojo  --> plain old java object,  used to represent a certain type of object
// model   --> used to represent a certain type of object

public class UserParent {

	Faker faker = new Faker();
	Random rd = new Random();

	public String firstName = faker.name().firstName();
	public String lastName = faker.name().lastName();
	public String middleName = faker.name().lastName();
	public String address = faker.address().fullAddress();
	// System.out.println(address);
	public String street = address.split(",")[0];
	public String city = address.split(",")[1];
	public String password = ConfigurationReader.getProperty("parentEmailPass");
	public String addpart = address.split(",")[2].trim();
	public String zipcode = addpart.split(" ")[1];
	public String state = addpart.split(" ")[0];
	//public String phone = rd.nextInt(923456253) + 4000000000L + "";
	public String phone =faker.number().numberBetween(200L, 999L)+""
						+faker.number().numberBetween(2000000L, 9990000L);
	public String email = ConfigurationReader.getProperty("parentEmail");
	// System.out.println(addpart);
	// System.out.println(firstName + zipcode + state);
	// public static void main(String[] args) {
	// Random rd = new Random();
	// long number = rd.nextInt(923456253) + 4000000000L ;
	// String phone1 = number+ "";
	// System.out.println(phone1);
	// }

}
