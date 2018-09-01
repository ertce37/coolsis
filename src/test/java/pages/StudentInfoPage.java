package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class StudentInfoPage {

	public StudentInfoPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(id = "firstname_1")
	public WebElement sfirstname;

	@FindBy(id = "lastname_1")
	public WebElement slastname;

	@FindBy(id = "dateofbirth_1")
	public WebElement sBirthDay;
	
	@FindBy(id = "gender_1")
	public WebElement sGender;
	
	@FindBy(id = "spn_acadYear_1_1")
	public WebElement acYear;
	
	@FindBy(id = "acadYear_1_1")
	public WebElement rBttnAcYear2018;
	
	@FindBy(id = "gradeLevel_1")
	public WebElement sGrade;

	@FindBy(id = "parentRelation_1")
	public WebElement parentRelation;

	@FindBy(xpath = "//td[@class='buttonRounded']")
	public WebElement alertOk;

}
