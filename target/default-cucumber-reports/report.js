$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/EnrollmentInquiryForm.feature");
formatter.feature({
  "name": "Registiration EnrollmentInquiryForm succesfully",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "catching unexpected actions while filling the form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see unchecked radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_unchecked_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "see all unfilled page for student information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see all fields are unfilled",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_all_fields_are_unfilled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "check auto selected education year is 2018",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all parent information form",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_parent_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the OK button on warning alert",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see auto selected education year is 2018",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_auto_selected_education_year_is(Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: wrong current year is selected automaticaly\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_should_see_auto_selected_education_year_is(EnrollmentInquiryFormStepDefs.java:192)\r\n\tat ✽.user should see auto selected education year is 2018(src/test/resources/features/EnrollmentInquiryForm.feature:46)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Application should not accept unreasonable grade +3 or -3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all parent information form",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_parent_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the OK button on warning alert",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all student information form",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_student_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select unreasonable grade more than +4-4 years",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_select_unreasonable_grade_more_than_years(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not pass the current page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_not_pass_the_current_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_should_not_pass_the_current_page(EnrollmentInquiryFormStepDefs.java:209)\r\n\tat ✽.user should not pass the current page(src/test/resources/features/EnrollmentInquiryForm.feature:58)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Complete registiration EnrollmentInquiryForm succesfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User get EnrollmentInquiryForm page",
  "keyword": "Given "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_get_EnrollmentInquiryForm_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User accept admission procesure",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_accept_admission_procesure()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all parent information form",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_parent_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the OK button on warning alert",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_OK_button_on_warning_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fill all student information form",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_fill_all_student_information_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see unselected radio button for school",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_unselected_radio_button_for_school()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see warning alert",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_warning_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});