package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.Driver;



public class ParentInfoPage {

	public ParentInfoPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	
	@FindBy(id = "pfirstname")
	public WebElement pfirstname;
	
	@FindBy(id = "plastname")
	public WebElement plastname;

	@FindBy(id = "pemail")
	public WebElement pemail;
	
	@FindBy(id = "phomephone")
	public WebElement phomephone;
	
	@FindBy(id = "pstreet")
	public WebElement pstreet;
	
	@FindBy(id = "pcity")
	public WebElement pcity;
	
	@FindBy(id = "pstate")
	public WebElement pstate;
	
	@FindBy(id = "pzipcode")
	public WebElement pzipcode;
	
	@FindBy(id = "pHowDidYouHearUs")
	public WebElement pHowDidYouHearUs;
	

	

}