$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/EnrollmentInquiryForm.feature");
formatter.feature({
  "name": "EnrollmentInquiryForm",
  "description": "",
  "keyword": "Feature"
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
  "name": "User should see \"Parent\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_page(String)"
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
  "name": "User should see \"Student\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_page(String)"
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
  "name": "User should see \"Schools\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see sutudents\u0027 name on page",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_sutudents_name_on_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Wrong student name is displayed expected:\u003c[]\u003e but was:\u003c[Josh Beatty]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat stepDefinitions.EnrollmentInquiryFormStepDefs.user_should_see_sutudents_name_on_page(EnrollmentInquiryFormStepDefs.java:94)\r\n\tat ✽.User should see sutudents\u0027 name on page(src/test/resources/features/EnrollmentInquiryForm.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User should see Academic year",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_Academic_year()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see grade level",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_grade_level()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see students\u0027 age",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_students_age()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see available schools",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_available_schools()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select one of the school from available schools list",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_select_one_of_the_school_from_available_schools_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see \"Finish\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the warnin sentence is disabled \"Please carefully review the form you have entered.\"",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.verify_the_warnin_sentence_is_disabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify all parent\u0027s informations",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.verify_all_parent_s_informations()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify all student\u0027s informations",
  "keyword": "And "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.verify_all_student_s_informations()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click the next button",
  "keyword": "When "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_click_the_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should see Confirmation Number",
  "keyword": "Then "
});
formatter.match({
  "location": "EnrollmentInquiryFormStepDefs.user_should_see_Confirmation_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});