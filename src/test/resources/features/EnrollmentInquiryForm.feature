Feature: EnrollmentInquiryForm
@temp
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
	