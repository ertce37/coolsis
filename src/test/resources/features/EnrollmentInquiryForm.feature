@temp
Feature: Registiration EnrollmentInquiryForm succesfully

Scenario: Complete registiration EnrollmentInquiryForm succesfully
	Given User get EnrollmentInquiryForm page
	When User accept admission procesure
	And User click the next button
	Then User should see "Parent" page
	When User fill all parent information form
	And User click the next button
	And User click the OK button on warning alert
	Then User should see "Student" page
	When User fill all student information form
	And User click the next button
	Then User should see "Schools" page
	And User should see sutudents' name on page
	And User should see Academic year
	And User should see grade level
	And User should see students' age 
	And User should see available schools 
	When User select one of the school from available schools list
	And User click the next button
	Then User should see "Finish" page
	And verify the warnin sentence is disabled "Please carefully review the form you have entered."
	And verify all parent's informations
	And verify all student's informations
	When User click the Finish button
	Then User should see Confirmation Number 
	@temp
Scenario: catching unexpected actions while filling the form
	Given User get EnrollmentInquiryForm page
	Then user should see unchecked radio button 
	@temp
Scenario: see all unfilled page for student information
	Given User get EnrollmentInquiryForm page	
	When User accept admission procesure
	And User click the next button
	Then user should see all fields are unfilled
	@temp
Scenario: check auto selected education year is 2018
	Given User get EnrollmentInquiryForm page	
	When User accept admission procesure
	And User click the next button
	When User fill all parent information form
	And User click the next button
	And User click the OK button on warning alert
	Then user should see auto selected education year is 2018
	@temp
Scenario: Application should not accept unreasonable grade +3 or -3
	Given User get EnrollmentInquiryForm page
	When User accept admission procesure
	And User click the next button
	And User fill all parent information form	
	And User click the next button
	And User click the OK button on warning alert
	And User fill all student information form
	And user select unreasonable grade more than +4-4 years
	And User click the next button
	Then user should not pass the current page
	@temp
Scenario: Complete registiration EnrollmentInquiryForm succesfully
	Given User get EnrollmentInquiryForm page
	When User accept admission procesure
	And User click the next button	
	When User fill all parent information form
	And User click the next button
	And User click the OK button on warning alert
	When User fill all student information form
	And User click the next button
	Then user should see unselected radio button for school
	When User click the next button
	Then user should see warning alert
	
	
	