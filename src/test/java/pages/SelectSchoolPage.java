package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class SelectSchoolPage {
	public SelectSchoolPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(id = "studenthdr1")
	public WebElement studentFullName;
	
	@FindBy(id = "studentyearinfo1")
	public WebElement academicYear;
	
	@FindBy(id = "studentgradeinfo1")
	public WebElement gradeLevel;
	
	@FindBy(id = "studentageinfo1")
	public WebElement studentAgeInfo;
	
	@FindBy(id = "tableSchools_1")
	public WebElement schoolTable;
	
	@FindBy(id = "school_1_2")
	public WebElement firstSchoolName;
	
	public int studentAge() {
		String stAgeInfo = Driver.getDriver().findElement(By.id("studentageinfo1")).getText();
		int stAge = Integer.parseInt(stAgeInfo.split(" ")[0]);
		return stAge;
		
	}
}
