package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;

public class FinishPage {

	public FinishPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(xpath = "//p[contains(text(),'Please carefully review the form you have entered.')]")
	public WebElement warningMessage;
	
	@FindBy(xpath = "(//section[1]/div[2]/div[1]/span[1])[1]")
	public WebElement parentFName;

	@FindBy(xpath = "(//section[1]/div[2]/div[3]/span[1])[1]")
	public WebElement parentLName;
	
	@FindBy(xpath = "(//section[1]/div[5]/div[1]/span[1])[1]")
	public WebElement parentPhoneNumber;
	
	@FindBy(xpath = "(//section[1]/div[7]/div[2]/span[1])[1]")
	public WebElement parentZipCode;
	
	@FindBy(xpath = "(//section[2]/div[1]/div[2]/div[1]/span[1])[1]")
	public WebElement studentFName;
	
	@FindBy(xpath = "(//section[2]/div[1]/div[2]/div[3]/span[1])[1]")
	public WebElement studentLName;
	
	@FindBy(xpath = "//a[contains(text(),'Finish')]")
	public WebElement finishButton;
	
	@FindBy(id = "application-no-wrap")
	public WebElement confirmationNumber;
	
	

}
