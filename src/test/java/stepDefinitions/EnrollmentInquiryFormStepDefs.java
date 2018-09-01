package stepDefinitions;

import static org.junit.Assert.*;
import static utilities.BrowserUtils.selectByIndex;
import static utilities.BrowserUtils.waitFor;

import org.openqa.selenium.Keys;

import com.github.javafaker.Faker;

import beans.UserParent;
import beans.UserStudent;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.EnrollmentInquiryFormPage;
import pages.FinishPage;
import pages.ParentInfoPage;
import pages.SelectSchoolPage;
import pages.StudentInfoPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class EnrollmentInquiryFormStepDefs {
	EnrollmentInquiryFormPage EFP = new EnrollmentInquiryFormPage();
	ParentInfoPage pip = new ParentInfoPage();
	StudentInfoPage sip = new StudentInfoPage();
	Faker faker = new Faker();
	UserParent up = new UserParent();
	UserStudent us = new UserStudent();
	SelectSchoolPage sp = new SelectSchoolPage();
	FinishPage fp = new FinishPage();
	// UserParent up=new UserParent(pfirstName, "lastName", "email", "phone",
	// "company", "street", "city", "password", "zipcode", "state");

	@Given("User get EnrollmentInquiryForm page")
	public void user_get_EnrollmentInquiryForm_page() {
		Driver.getDriver().get(ConfigurationReader.getProperty("URLEnrollmentInquiryForm"));
	}

	@When("User accept admission procesure")
	public void user_accept_admission_procesure() {
		waitFor(5);
		EFP.acceptTermRadioButton.click();
	}

	@When("User click the next button")
	public void user_click_the_next_button() {
		EFP.nextButton.click();
		waitFor(2);
	}

	@Then("User should see {string} page")
	public void user_should_see_page(String page) {
		assertTrue(EFP.pageVerify(page).isEnabled());
	}

	@When("User fill all parent information form")
	public void user_fill_all_parent_information_form() {

		pip.pfirstname.sendKeys(up.firstName);
		pip.plastname.sendKeys(up.lastName);
		selectByIndex(pip.pHowDidYouHearUs, 1);
		pip.pemail.sendKeys(up.email);
		pip.phomephone.sendKeys(up.phone);
		pip.pstreet.sendKeys(up.street);
		pip.pcity.sendKeys(up.city);
		pip.pstate.sendKeys(up.state);
		pip.pzipcode.sendKeys(up.zipcode);
	}

	@When("User click the OK button on warning alert")
	public void user_click_the_OK_button_on_warning_alert() {
		sip.alertOk.click();
		waitFor(1);
	}

	@When("User fill all student information form")
	public void user_fill_all_student_information_form() {
		selectByIndex(sip.parentRelation, 2);
		sip.sfirstname.sendKeys(us.sfirstName);
		sip.slastname.sendKeys(us.slastName);
		sip.sBirthDay.sendKeys(us.dateOfBirth() + Keys.ENTER);
		waitFor(1);
		selectByIndex(sip.sGender, 2);
		sip.rBttnAcYear2018.click();
		us.currentAcYear = sip.acYear.getText();

		selectByIndex(sip.sGrade, us.sGrade());
	}

	@Then("User should see sutudents' name on page")
	public void user_should_see_sutudents_name_on_page() {
		String sFullName = us.sfirstName.trim() + " " + us.slastName.trim();
		assertEquals("Wrong student name is displayed", sFullName.trim(), sp.studentFullName.getText().trim());
	}

	@Then("User should see Academic year")
	public void user_should_see_Academic_year() {
		String sipAcYear = us.currentAcYear.replaceAll("[^0-9]", "");
		String scAcYear = sp.academicYear.getText().replaceAll("[^0-9]", "");
		assertEquals("Wrong academic year is displayed", sipAcYear.trim(), scAcYear.trim());
	}

	@Then("User should see grade level")
	public void user_should_see_grade_level() {
		int sGradeExpected = us.sGrade();
		int sGrareActual = Integer.parseInt(sp.gradeLevel.getText().trim()) + 1;
		assertEquals("Wrong grade level is displayed", sGradeExpected, sGrareActual);
	}

	@Then("User should see students' age")
	public void user_should_see_students_age() {
		int sCurrentAge =Integer.parseInt(ConfigurationReader.getProperty("currentYear"))
				-Integer.parseInt(us.birthDay1.split("/")[2]);
		assertEquals("Wrong student age is displayed",sCurrentAge,
				Integer.parseInt(sp.studentAgeInfo.getText().trim().split(" ")[0]));

	}

	@Then("User should see available schools")
	public void user_should_see_available_schools() {
		assertTrue(sp.firstSchoolName.isDisplayed());

	}

	@When("User select one of the school from available schools list")
	public void user_select_one_of_the_school_from_available_schools_list() {
		sp.firstSchoolName.click();

	}

	@Then("verify the warnin sentence is disabled {string}")
	public void verify_the_warnin_sentence_is_disabled(String string) {
		assertTrue(fp.warningMessage.isDisplayed());

	}

	@Then("verify all parent's informations")
	public void verify_all_parent_s_informations() {
		assertEquals("Wrong parent first name is displayed",up.firstName,fp.parentFName.getText().trim());
		assertEquals("Wrong parent last name is displayed",up.lastName,fp.parentLName.getText().trim());
		assertEquals("Wrong parent zipcode is displayed",up.zipcode,fp.parentZipCode.getText().trim());
		assertEquals("Wrong parent phone number is displayed",up.phone,fp.parentPhoneNumber.getText().trim());
	}

	@Then("verify all student's informations")
	public void verify_all_student_s_informations() {
		assertEquals("Wrong student first name is displayed",us.sfirstName,fp.studentFName.getText().trim());
		assertEquals("Wrong student last name is displayed",us.slastName,fp.studentLName.getText().trim());
	}
	
	@When("User click the Finish button")
	public void user_click_the_Finish_button() {
	   fp.finishButton.click();
	   waitFor(1);
	}

	@Then("User should see Confirmation Number")
	public void user_should_see_Confirmation_Number() {
		assertTrue(fp.confirmationNumber.isDisplayed());
		System.out.println("Student "+ us.sfirstName + "'s " + fp.confirmationNumber.getText());
		
	}

}
